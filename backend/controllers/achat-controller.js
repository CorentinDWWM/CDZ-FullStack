const { Achat } = require("../models/achat.schema");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const moment = require("moment");

async function getStripePurchases() {
  try {
    const purchases = await stripe.checkout.sessions.list({
      limit: 100,
    });
    return purchases.data;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function storePurchases(purchases) {
  try {
    // 2. Récupérer les détails des achats pour chaque session
    for (const purchase of purchases) {
      if (
        purchase.payment_status === "paid" &&
        purchase.customer_email !== null
      ) {
        const lineItems = await stripe.checkout.sessions.listLineItems(
          purchase.id,
          {
            expand: ["data.price.product"],
          }
        );
        for (let i = 0; i < lineItems.data.length; i++) {
          const item = lineItems.data[i];

          const achatData = {
            price: item.amount_total / 100,
            name: item.description || item.price.product.name,
            email: purchase.customer_email,
            stripeId: `${purchase.id}`,
            currency: purchase.currency,
            status: purchase.payment_status,
            date:
              purchase.metadata.date_achat ||
              moment(purchase.created * 1000)
                .toDate()
                .toLocaleString("fr-FR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
          };

          await Achat.findOneAndUpdate(
            { stripeId: achatData.stripeId },
            achatData,
            { upsert: true, new: true }
          );
        }
      }
    }

    console.log("Achats récupérés et enregistrés dans la BDD");
  } catch (error) {
    console.error("Erreur lors de la récupération des achats :", error);
  }
}

const syncPurchases = async (req, res) => {
  try {
    const purchases = await getStripePurchases();
    await storePurchases(purchases);
    res.status(200).json({ message: "Achats synchronisés" });
  } catch (error) {
    console.error("Erreur sync achats :", error);
    res.status(500).json({ error: error.message });
  }
};

(async () => {
  try {
    const purchases = await getStripePurchases();
    await storePurchases(purchases);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération ou du stockage des achats:",
      error
    );
  }
})();

const getAchats = async (req, res) => {
  try {
    const achat = await Achat.find();
    res.status(200).json(achat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneAchat = async (req, res) => {
  console.log(req.params);
  try {
    const achat = await Achat.findById(req.params.id);
    if (!achat) {
      res.status(500).json({ error: "Achats introuvables" });
    } else {
      res.status(200).json(achat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserAchat = async (req, res) => {
  // console.log(req.params);
  try {
    const achat = await Achat.find({ email: req.params.email });
    if (!achat) {
      res.status(500).json({ error: "Achats introuvables" });
    } else {
      res.status(200).json(achat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAchat = async (req, res) => {
  try {
    const achat = await Achat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!achat) {
      res.status(500).json({ error: "Achat not found" });
    } else {
      res.status(200).json(achat);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAchat = async (req, res) => {
  try {
    const achat = await Achat.findByIdAndDelete(req.params.id);
    if (!achat) {
      res.status(500).json({ error: "Achat not found" });
    } else {
      res.status(200).json({ message: "Achat supprimé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAchat = async (req, res) => {
  try {
    const achat = new Achat(req.body);
    await achat.save();
    res.status(200).json(achat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAchats,
  getOneAchat,
  getUserAchat,
  updateAchat,
  deleteAchat,
  createAchat,
  getStripePurchases,
  syncPurchases,
};

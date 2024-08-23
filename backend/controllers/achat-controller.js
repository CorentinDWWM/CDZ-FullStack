const { Achat } = require("../models/achat.schema");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function getStripePurchases() {
  try {
    const purchases = await stripe.charges.list({ limit: 100 });
    return purchases.data;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function storePurchases(purchases) {
  try {
    for (const purchase of purchases) {
      const amountInUnits = purchase.amount / 100;
      await Achat.findOneAndUpdate(
        { stripeId: purchase.id },
        {
          stripeId: purchase.id,
          amount: amountInUnits,
          currency: purchase.currency,
          status: purchase.status,
          created: new Date(purchase.created * 1000),
        },
        { upsert: true, new: true }
      );
    }
  } catch (error) {
    console.error(
      "Erreur lors du stockage des achats dans la base de données:",
      error
    );
    throw error;
  }
}

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
  updateAchat,
  deleteAchat,
  createAchat,
  getStripePurchases,
};

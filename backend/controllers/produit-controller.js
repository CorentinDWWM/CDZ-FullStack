const Produit = require("../models/produit.schema");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const local = "http:localhost:5173";
const deploy = "https://cdz-fullstack.onrender.com";

const goCreateCheckout = async (req, res) => {
  const product = await Produit.findById(req.params.id);
  const lineItems = [
    {
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: 1,
    },
  ];
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${deploy}`,
    cancel_url: `${deploy}/boutique`,
  });
  res.json({ id: session.id });
};

const getAllProduits = async (req, res) => {
  try {
    const products = await Produit.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProduit = async (req, res) => {
  try {
    const product = await Produit.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProduit = async (req, res) => {
  try {
    const product = await Produit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(500).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduit = async (req, res) => {
  try {
    const product = await Produit.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(500).json({ error: "Product not found" });
    } else {
      res.status(200).json({ message: "Product supprimé" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduit = async (req, res) => {
  try {
    const product = new Produit(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProduit,
  getAllProduits,
  goCreateCheckout,
  updateProduit,
  deleteProduit,
  createProduit,
};

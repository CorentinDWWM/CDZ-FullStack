const router = require("express").Router();
const Produit = require("../models/produit.schema");
const {
  getAllProduits,
  getProduit,
  goCreateCheckout,
  updateProduit,
  deleteProduit,
  createProduit,
} = require("../controllers/produit-controller");

// api/produits

router.post("/:id/createcheckout", goCreateCheckout);

router.get("/", getAllProduits);

router.get("/:id", getProduit);
router.put("/:id", updateProduit);
router.delete("/:id", deleteProduit);
router.post("/", createProduit);

module.exports = router;

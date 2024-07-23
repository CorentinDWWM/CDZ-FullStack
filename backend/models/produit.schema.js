const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

produitSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Produit", produitSchema);

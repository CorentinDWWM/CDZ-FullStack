const mongoose = require("mongoose");

const achatSchema = new mongoose.Schema({
  stripeId: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: String, required: true },
});

achatSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Achat = mongoose.model("Achat", achatSchema);

module.exports = { Achat, achatSchema };

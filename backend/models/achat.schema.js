const mongoose = require("mongoose");

const achatSchema = new mongoose.Schema({
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  created: { type: Date, required: true },
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

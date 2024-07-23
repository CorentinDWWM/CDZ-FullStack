const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  nom: String,
  createur: String,
  lien: String,
  id_video: String,
});

videoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Video", videoSchema);

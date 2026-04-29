const mongoose = require("mongoose");

module.exports = mongoose.model("Quest", {
  title: String,
  xp: Number
});

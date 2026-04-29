const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 }
});

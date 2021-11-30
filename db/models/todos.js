const mongoose = require("mongoose");

const role = new mongoose.Schema({
  task: { type: String, required: true },
  isdel:{ type: Boolean, default: false},
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todos", todos);
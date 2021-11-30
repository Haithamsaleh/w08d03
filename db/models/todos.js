const mongoose = require("mongoose");

const role = new mongoose.Schema({
  task: { type: String, required: true },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todos", todos);
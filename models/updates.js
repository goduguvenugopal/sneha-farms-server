const mongoose = require("mongoose");

const updatesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
});

const Update = mongoose.model("Update", updatesSchema);

module.exports = Update;

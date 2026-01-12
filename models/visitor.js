const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  visitor_id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Visitor = mongoose.model("Visitor", analyticsSchema);

module.exports = Visitor;

const Visitor = require("../models/visitor");

// creating visitor save controller
const saveVisitor = async (req, res) => {
  try {
    const { visitor_id } = req.body;
    const todayDate = new Date().toLocaleDateString("en-GB");
    const isVisitorExit = await Visitor.findOne({
      visitor_id: visitor_id,
      date: todayDate,
    });
    if (isVisitorExit) {
      return res.status(401).json({ error: "user already visited today" });
    }
    const saveVisitorData = new Visitor({
      visitor_id,
      date: todayDate,
    });

    await saveVisitorData.save();
    return res.status(201).json({ message: "user visited successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { saveVisitor };

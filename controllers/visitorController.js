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

// get today visitors controller
const getVisitors = async (req, res) => {
  try {
    const {type} = req.query;
    const todayDate = new Date().toLocaleDateString("en-GB");
    if ( type === "today") {
      const todayVisitors = await Visitor.find({ date: todayDate });
      if (todayVisitors) {
        return res.status(200).json({ todayVisitors: todayVisitors.length });
      }
    } else if ( type === "all") {
      const allDays = await Visitor.find({});
      return res.status(200).json({ allDaysVisitors: allDays.length });
    }
 
    return res.status(400).json({ error: "Invalid query parameter" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { saveVisitor, getVisitors };

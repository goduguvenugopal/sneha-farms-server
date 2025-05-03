const Update = require("../models/updates");

// creating updates post logic
const sendUpdates = async (req, res) => {
  try {
    const { message, title } = req.body;
    const existedUpadtes = await Update.find({});
    if (existedUpadtes.length >= 1) {
      return res.status(404).json({ message: "update already existed" });
    }
    const saveUpdate = new Update({
      message,
      title,
    });

    await saveUpdate.save();
    return res.status(201).json({ message: "update posted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// get updates logic
const getUpdate = async (req, res) => {
  try {
    const updates = await Update.find({});
    if (updates) {
      res.status(201).json(updates[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// delete logic
const deleteUpdate = async (req, res) => {
  try {
    await Update.deleteMany({});
    res.status(201).json({ message: "deleted update successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { sendUpdates, getUpdate , deleteUpdate};

const express = require("express");
const router = express.Router();
const { getMessages, deleteMessage } = require("../controllers/messageController");

router.get("/", getMessages);
router.delete("/:id", deleteMessage);

module.exports = router;

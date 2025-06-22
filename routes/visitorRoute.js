const express = require("express");
const {
  saveVisitor,
  getVisitors,
} = require("../controllers/visitorController");
const router = express.Router();

router.post("/visit", saveVisitor);
router.get("/get-visitors", getVisitors);

module.exports = router;

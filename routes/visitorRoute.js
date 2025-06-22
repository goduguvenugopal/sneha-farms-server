const express = require("express");
const { saveVisitor } = require("../controllers/visitorController");
const router = express.Router();

router.post("/visit" , saveVisitor)

module.exports = router
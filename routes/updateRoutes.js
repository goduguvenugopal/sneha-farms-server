const express = require("express");
const router = express.Router();
const {
  sendUpdates,
  getUpdate,
  deleteUpdate,
} = require("../controllers/updateController");

router.post("/send_update", sendUpdates);
router.get("/get_update", getUpdate);
router.delete("/delete_update", deleteUpdate);

module.exports = router;

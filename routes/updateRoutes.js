const express = require("express");
const {
  sendUpdates,
  getUpdate,
  deleteUpdate,
} = require("../controllers/updateController");
const router = express.Router();

router.post("/send_update", sendUpdates);
router.get("/get_update", getUpdate);
router.delete("/delete_update", deleteUpdate);

module.exports = router;

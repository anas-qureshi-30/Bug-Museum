const express = require("express");
const { createBug } = require("../controllers/bugController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, adminOnly, createBug);

module.exports = router;
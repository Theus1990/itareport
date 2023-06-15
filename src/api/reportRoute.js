const reportController = require("../controllers/reportController");

const express = require("express");
const router = express.Router();

router.post("/report/:id", reportController.createReport);

module.exports = router;

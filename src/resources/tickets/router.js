const express = require("express");

const router = express.Router();

const { addTickets } = require("./controller");

router.post("/", addTickets)

module.exports = router;
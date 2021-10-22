const express = require("express");

const router = express.Router();

const { addTicket } = require("./controller");

router.post("/", addTicket)

module.exports = router;
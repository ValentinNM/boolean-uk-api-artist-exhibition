const express = require("express");

const router = express.Router();

const { addTicket, deleteTicket } = require("./controller");

router.post("/", addTicket)

router.delete("/:id", deleteTicket)

module.exports = router;
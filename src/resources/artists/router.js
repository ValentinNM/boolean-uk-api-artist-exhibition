const express = require("express");

const router = express.Router();

const { postArtist } = require("./controller")

router.post("/", postArtist)

module.exports = router
const express = require("express");

const router = express.Router();

const { postExhibitionWithAddress } = require("./controller");

router.post("/", postExhibitionWithAddress)

module.exports = router;
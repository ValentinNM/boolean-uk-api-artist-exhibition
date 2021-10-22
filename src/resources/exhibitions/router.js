const express = require("express");

const router = express.Router();

const { postExhibitionWithAddress, getExhibitions } = require("./controller");

router.post("/", postExhibitionWithAddress);

router.get("/", getExhibitions);

module.exports = router;
const express = require("express");
const { service } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const { get } = service;

const router = express.Router();

router.get("/", ctrlWrapper(get));

module.exports = routerService = router;

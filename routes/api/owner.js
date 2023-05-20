const express = require("express");
const { owner } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const {
  get,
} = owner;

const router = express.Router();

router.get("/", ctrlWrapper(get));

module.exports = routerOwner = router;

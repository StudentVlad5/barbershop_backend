const express = require("express");
const { owner } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const { get, getOwnerById } = owner;

const router = express.Router();

router.get("/", ctrlWrapper(get));
router.get("/:id/", ctrlWrapper(getOwnerById));

module.exports = routerOwner = router;

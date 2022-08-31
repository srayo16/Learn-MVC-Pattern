const express = require("express");
const { getAllParts, partsPost, partsById } = require("../../Controller/parts.controller");
const { limiter } = require("../../Middleware/limit");
const { Countable } = require("../../Middleware/viewCount");
const router = express.Router();

// router.get("/", getAllParts);

// router.post("/", partsPost);

router.get("/:id", Countable, limiter, partsById);

router.route("/")
    .get(getAllParts)
    .post(partsPost)

module.exports = router;
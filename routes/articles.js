const express = require("express");
const router = express.Router();

// get all articles;
router.get("/", (req, res, next) => {
});

// get article by id;
router.get("/:id", (req, res, next) => {
});

// create new article;
router.post("/create", (req, res) => {
    res.render("add-user.ejs");
});

// update article;
router.put("/update", (req, res, next) => {
});

module.exports = router;

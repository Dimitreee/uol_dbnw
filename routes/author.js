
const express = require('express');
const router = express.Router();

// Route to list all articles
const Article = require("../models/article");

router.get('/', async (req, res) => {
    const article = new Article();

    try {
        const articles = await article.findAll();

        res.render('author/index.ejs', { articles });
    } catch (err) {
        res.status(500).send('Error fetching articles: ' + err.message);
    }
});


module.exports = router;

const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const Settings = require("../models/settings"); // Adjust the path as necessary

router.get('/', async (req, res) => {
    const article = new Article();
    try {
        const articles = await article.findAllPublished();
        const settings = new Settings();
        const actualSettings = await settings.find();

        res.render('reader', { articles, settings: actualSettings });
    } catch (err) {
        res.status(500).send('Error fetching articles: ' + err.message);
    }
});

module.exports = router;

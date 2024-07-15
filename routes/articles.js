const express = require('express');
const router = express.Router();

const Article = require('../models/article');
const Settings = require("../models/settings");
const Comment = require("../models/comment");

router.get('/create', (req, res) => {
    res.render('articles/create.ejs');
})

/**
 * @param {Object}
 *   body = {
 *       title: string,
 *       content: string,
 *       published: boolean,
 *   }
 * @return {Promise<Object>} newly created article's ID
 */
router.post('/create', async (req, res) => {
    const { title, content, published } = req.body;
    const article = new Article();

    try {
        const result = await article.create({
            title,
            content,
            published: false,
        });

        res.redirect(`/articles/${result.id}`);
    } catch (err) {
        res.status(500).send('Error creating article: ' + err.message);
    }
});

router.get('/:id', async (req, res) => {
    const article = new Article();
    const settings = new Settings();
    const comment = new Comment();
    const comments = await comment.findAll({ article_id: req.params.id });

    try {
        const articleData = await article.find({ id: req.params.id, published: true });
        const actual_settings = await settings.find();

        if (articleData) {
            res.render('articles/view.ejs', { article: articleData, settings: actual_settings, comments });
        } else {
            res.status(404).send('Article not found');
        }
    } catch (err) {
        res.status(500).send('Error reading article: ' + err.message);
    }
});

router.post('/add-comment/:id', async (req, res) => {
    const { comment } = req.body;
    const commentModel = new Comment();
    try {
        await commentModel.create({ article_id: req.params.id, text: comment, author: 'Anonymous' });
        res.redirect(`/articles/${req.params.id}`);
    } catch (err) {
        res.status(500).send('Error adding comment: ' + err.message);
    }
});

// Route to render the edit form;
router.get('/edit/:id', async (req, res) => {
    const article = new Article();
    try {
        const articleData = await article.find({ id: req.params.id });
        if (articleData) {
            res.render('articles/edit', { article: articleData });
        } else {
            res.status(404).send('Article not found');
        }
    } catch (err) {
        res.status(500).send('Error fetching article for edit: ' + err.message);
    }
});

// Route to handle form submission for edits;
router.post('/edit/:id', async (req, res) => {
    const { title, content } = req.body;
    const article = new Article();

    try {
        await article.update({ id: req.params.id, title, content, updated_at: new Date()});
        res.redirect(`/articles/${req.params.id}`);
    } catch (err) {
        res.status(500).send('Error updating article: ' + err.message);
    }
});

// Route to publish an article;
router.post('/publish/:id', async (req, res) => {
    const article = new Article();

    console.log(req.body, req.params)

    try {
        await article.update({ id: req.body.id, published: true });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Error publishing article: ' + err.message);
    }
});

// Route to increase-views an article;
router.post('/increase-views/:id', async (req, res) => {
    const article = new Article();

    try {
        await article.update({ id: req.params.id, views: req.body.count });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Error increasing views: ' + err.message);
    }
});

// Route to increase-views an article;
router.post('/increase-likes/:id', async (req, res) => {
    const article = new Article();

    try {
        await article.update({ id: req.params.id, likes: req.body.likes });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send('Error increasing views: ' + err.message);
    }
});

module.exports = router;

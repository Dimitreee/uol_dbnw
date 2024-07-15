const express = require('express');
const router = express.Router();
const Settings = require('../models/settings');

router.get('/', async (req, res) => {
    const settings = new Settings();
    try {
        let settingsData = await settings.find();

        if (!settingsData) {
            await settings.create({ title: 'My Blog', name: 'Author Name' });

            settingsData = await settings.find();
        }

        res.render('author/settings.ejs', { settings: settingsData });
    } catch (err) {
        res.status(500).send('Error fetching settings: ' + err.message);
    }
});

router.post('/', async (req, res) => {
    const { title, name } = req.body;
    const settings = new Settings();

    try {
        await settings.update({ title, name });

        res.redirect('/settings');
    } catch (err) {
        res.status(500).send('Error updating settings: ' + err.message);
    }
});

module.exports = router;

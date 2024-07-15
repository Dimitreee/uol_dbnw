const express = require('express');
const bodyParser = require('body-parser');

const articlesRoutes = require('./routes/articles');
const authorRoutes = require('./routes/author');
const readerRoutes = require('./routes/reader');
const settingsRoutes = require('./routes/settings');

const { initDBConnection } = require('./db');
const Settings = require("./models/settings");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

initDBConnection();

app.get('/', async (req, res) => {
    const settings = new Settings();

    try {
        const actualSettings = await settings.find();
        res.render('index.ejs', { settings: actualSettings });
    } catch (err) {
        res.status(500).send('Error fetching articles: ' + err.message);
    }
});

app.use('/author', authorRoutes);
app.use('/reader', readerRoutes);
app.use('/articles', articlesRoutes);
app.use('/settings', settingsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


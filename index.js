const express = require('express');
const usersRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');
const {initDBConnection} = require("./db");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

initDBConnection();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/users', usersRoutes);
app.use('/articles', articlesRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


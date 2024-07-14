const express = require("express");
const router = express.Router();

router.get("/list-users", (req, res, next) => {
    query = "SELECT * FROM users"

    global.db.all(query,
        function (err, rows) {
            if (err) {
                next(err);
            } else {
                res.json(rows);
            }
        }
    );
});

router.get("/add-user", (req, res) => {
    res.render("add-user.ejs");
});

router.post("/add-user", (req, res, next) => {
    query = "INSERT INTO users (user_name) VALUES( ? );"
    query_parameters = [req.body.user_name]

    global.db.run(query, query_parameters,
        function (err) {
            if (err) {
                next(err); //send the error on to the error handler
            } else {
                res.send(`New data inserted @ id ${this.lastID}!`);
                next();
            }
        }
    );
});

module.exports = router;

const env = require("./env.json");

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(env);

db.connect((err) =>  {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL connected");
    }
});

app.get("/merchdisplay", (req, res) => {
    const lowRange = req.query.lowRange;
    const highRange = req.query.highRange;
    db.query('SELECT * FROM merchandise WHERE id >= ? and id <= ?',
    [lowRange, highRange],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/merchinfor", (req, res) => {
    const id = req.body.id;
    db.query("SELECT * FROM merchandise WHERE id = ?",
    [id],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
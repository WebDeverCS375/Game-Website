const env = require("./env.json");

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

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
            for (element of result) {
                const image = `http://localhost:3001/images/${element.id}.jpeg`;
                element.image = image;
            }
            res.json(result);
        }
    });
});

app.get("/searchmerch", (req, res) => {
    const name = req.query.name;
    const category = req.query.category;
    var searchString = "SELECT * FROM merchandise WHERE name = ? and category = ?";
    var searchValue = [name, category];
    if (name === '') {
        searchString = "SELECT * FROM merchandise WHERE category = ?";
        searchValue = [category];
    }
    
    if (category === '') {
        searchString = "SELECT * FROM merchandise WHERE name = ?";
        searchValue = [category];
    }

    if (name === '' && category === '') {
        searchString = "SELECT * FROM merchandise";
        searchValue = [];
    }

    db.query(searchString,
    searchValue,
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            for (element of result) {
                const image = `http://localhost:3001/images/${element.id}.jpeg`;
                element.image = image;
            }
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
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

const maxDisplay = 2;

const getData = async (req, res, mes, params) => {
    db.query(mes,
    params,
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
};

app.get("/merchdisplay", (req, res) => {
    const start = [req.query.start];
    const mes = `SELECT * FROM merchandise WHERE id >= ? LIMIT ${maxDisplay}`;
    getData(req, res, mes, start);
});

app.get("/searchmerch", (req, res) => {
    const name = req.query.name;
    const category = req.query.category;
    var searchString = `SELECT * FROM merchandise WHERE name = ? and category = ? LIMIT ${maxDisplay}`;
    var searchValue = [name, category];
    if (name === '') {
        searchString = `SELECT * FROM merchandise WHERE category = ? LIMIT ${maxDisplay}`;
        searchValue = [category];
    }
    
    if (category === '') {
        searchString = `SELECT * FROM merchandise WHERE name = ? LIMIT ${maxDisplay}`;
        searchValue = [name];
    }

    if (name === '' && category === '') {
        searchString = `SELECT * FROM merchandise LIMIT ${maxDisplay}`;
        searchValue = [];
    }

    getData(req, res, searchString, searchValue);
});

app.get("/merchinfor", (req, res) => {
    const id = [req.body.id];
    const mes = "SELECT * FROM merchandise WHERE id = ?"
    getData(req, res, mes, id);
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
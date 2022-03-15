const env = require("./env.json");

const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { response } = require("express");
const e = require("express");

const saltRounds = 10;

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

const maxDisplay = 10;

const getData = async (req, res, mes, params) => {
    db.query(mes,
    params,
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            for (element of result) {
                const image = `http://localhost:3001/images/${element.product_id}.jpeg`;
                element.image = image;
            }
            res.json(result);
        }
    });
};

app.get("/merchdisplay", (req, res) => {
    const start = [req.query.start];
    const mes = `SELECT * FROM merch WHERE product_id >= ? LIMIT ${maxDisplay}`;
    getData(req, res, mes, start);
});

app.get("/searchmerch", (req, res) => {
    const name = req.query.name;
    const category = req.query.category;
    const start = req.query.start;
    var searchString = `SELECT * FROM merch WHERE game_name = ? and game_genre = ? and product_id >= ? LIMIT ${maxDisplay}`;
    var searchValue = [name, category, start];
    if (name === '') {
        searchString = `SELECT * FROM merch WHERE game_genre = ? and product_id >= ? LIMIT ${maxDisplay}`;
        searchValue = [category, start];
    }
    
    if (category === '') {
        searchString = `SELECT * FROM merch WHERE game_name = ? and product_id >= ? LIMIT ${maxDisplay}`;
        searchValue = [name, start];
    }

    if (name === '' && category === '') {
        searchString = `SELECT * FROM merch WHERE product_id >= ? LIMIT ${maxDisplay}`;
        searchValue = [start];
    }

    getData(req, res, searchString, searchValue);
});

app.get("/merchinfor", (req, res) => {
    const id = [req.body.id];
    const mes = "SELECT * FROM merch WHERE product_id = ?"
    getData(req, res, mes, id);
});

app.post("/user", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;
    if (
        typeof username !== "string" ||
        typeof plaintextPassword !== "string" ||
        username.length < 1 ||
        username.length > 20 ||
        plaintextPassword.length < 5 ||
        plaintextPassword.length > 36
    ) {
        // username and/or password invalid
        return res.status(401).send();
    }

    db.query("SELECT seller_name FROM seller WHERE seller_name = ?", [
        username,
    ], (err, userRepeat) => {
        if (userRepeat.length !== 0) {
            // username doesn't exist
            return res.status(401).send();
        }
        bcrypt.hash(plaintextPassword, saltRounds).then((hashedPassword) => {
            db.query(
                "INSERT INTO seller (seller_name, hashed_password, rating, merch_quantity) VALUES (?, ?, ?, ?)",
                [username, hashedPassword, 0, 0], (error, response) => {
                    if (error === null) {
                        res.status(200).send();
                    } else {
                        console.log(error);
                        res.status(500).send();
                    }
                }
            )
        });
    });
            
});

app.post("/auth", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;
    db.query("SELECT hashed_password FROM seller WHERE seller_name = ?", [
        username,
    ], (err, userRepeat) => {
        if (userRepeat.length === 0) {
            // username doesn't exist
            return res.status(401).send();
        }
        let hashedPassword = userRepeat[0].hashed_password;
        bcrypt.compare(plaintextPassword, hashedPassword, (error, response) => {
            if (response) {
                res.status(200).send();
            } else {
                res.status(401).send();
            }
        })
    });
});

<<<<<<< HEAD
app.get('/all', (req, res)=>{
    const mes = 'SELECT * FROM merch'
    getData(req, res, mes)
})

=======
>>>>>>> main

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
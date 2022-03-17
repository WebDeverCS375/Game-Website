const env = require("./env.json");

const express = require("express");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { response } = require("express");
const e = require("express");

const fs = require('fs')

const saltRounds = 10;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));
var fileUpload = require('express-fileupload');

app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true,
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: false,
}));

const db = mysql.createConnection(env);

db.connect((err) => {
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
    const par = [req.query.id];
    const mes = "SELECT * FROM merch WHERE product_id = ?";
    getData(req, res, mes, par);
});

app.post("/user", function (req, res) {
    let username = req.body.username;
    let plaintextPassword = req.body.plaintextPassword;

    console.log(typeof username !== "string",
        typeof plaintextPassword !== "string",
        username.length < 1,
        username.length > 20,
        plaintextPassword.length < 5,
        plaintextPassword.length > 36)

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


    console.log("added")

    db.query("SELECT seller_name FROM seller WHERE seller_name = ?", [
        username,
    ], (err, userRepeat) => {
        if (userRepeat.length !== 0) {
            // username doesn't exist
            return res.status(401).send();
        }
        bcrypt.hash(plaintextPassword, saltRounds).then((hashedPassword) => {
            db.query(
                "INSERT INTO seller (seller_name, hashedPassword, rating, merch_quantity) VALUES (?, ?, ?, ?)",
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
    console.log('select')
    db.query("SELECT hashedPassword FROM seller WHERE seller_name = ?", [
        username,
    ], (err, userRepeat) => {
        console.log(userRepeat)
        if (userRepeat.length === 0) {
            // username doesn't exist
            return res.status(401).send();
        }
        let hashedPassword = userRepeat[0].hashedPassword;

        bcrypt.compare(plaintextPassword, hashedPassword, (error, response) => {
            console.log(response)
            if (response) {
                res.status(200).send();
            } else {
                res.status(401).send();
            }
        })
    });
});

app.get('/all', (req, res) => {
    const mes = 'SELECT * FROM merch'
    getData(req, res, mes)
})

app.post('/updateItem', (req, res) => {
    db.query('UPDATE merch SET game_name = ?, unit_price = ?, game_console = ?, game_genre = ? where product_id = ?',
        [req.body?.game_name, req.body?.unit_price, req.body?.game_console, req.body?.game_genre, req.body?.product_id], (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated")
        })
    res.send()
})

app.delete('/deleteItem/:id', (req, res) => {
    let id = req.params.id
    db.query('DELETE from merch where product_id = ? ', [id], (err, result) => {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) deleted")
    })
})


app.post('/upload', (req, res) => {
    let id = 0
    db.query('INSERT into merch(game_name, game_genre, unit_price, game_console, game_seller) values(?, ?, ?, ?, 0)', [req.body?.game_name, req.body?.game_genre.value, req.body?.unit_price, req.body?.game_console.value],
        async (err, result) => {
            if (err) throw err;

            res.json(result)

        })

    // res.json({ "id": "blank" })




})


app.post('/uploadImage', (req, res) => {

    req.files.file.mv(`./images/${req.body.id}.jpeg`)
    res.send()
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

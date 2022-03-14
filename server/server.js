const env = require("../../env.json");

const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'))

const db = mysql.createConnection(env);



db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL connected");
    }
});

// db.query('INSERT INTO Items(name, price, quantity) values("Mario Kart", 59.99, 20);')
// db.query('INSERT INTO Items(name, price, quantity) values("Pokemon Red", 59.99, 40);')


const maxDisplay = 2;

const getData = async (req, res, mes, params) => {
    db.query(mes,
        params,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                for (element of result) {
                    let image = `http://localhost:3001/images/${element.id}.jpeg`;
                    element.image = image;
                }
                res.json(result);
            }
        });
};

app.get("/merchdisplay", (req, res) => {
    const start = [req.query.start];
    const mes = `SELECT * FROM Items WHERE id >= ? LIMIT ${maxDisplay}`;
    getData(req, res, mes, start);
});

app.get("/searchmerch", (req, res) => {
    const name = req.query.name;
    const category = req.query.category;
    const start = req.query.start;
    var searchString = `SELECT * FROM Items WHERE name = ? and category = ? and id >= ? LIMIT ${maxDisplay}`;
    var searchValue = [name, category, start];
    if (name === '') {
        searchString = `SELECT * FROM Items WHERE category = ? and id >= ? LIMIT ${maxDisplay}`;
        searchValue = [category, start];
    }

    if (category === '') {
        searchString = `SELECT * FROM Items WHERE name = ? and id >= ? LIMIT ${maxDisplay}`;
        searchValue = [name, start];
    }

    if (name === '' && category === '') {
        searchString = `SELECT * FROM Items WHERE id >= ? LIMIT ${maxDisplay}`;
        searchValue = [start];
    }

    getData(req, res, searchString, searchValue);
});

app.get("/merchinfor", (req, res) => {
    const id = [req.body.id];
    const mes = "SELECT * FROM Items WHERE id = ?"
    getData(req, res, mes, id);
});

app.get("/all", (req, res) => {
    const mes = "SELECT * FROM Items"
    getData(req, res, mes)
})

app.get("/item/:id", (req, res) => {
    const id = req.params.id;
    const mes = "SELECT * FROM Items WHERE id = ?"
    getData(req, res, mes, id);
});

app.post('/updateItem', (req, res) => {
    let body = req.body
    // console.log(req.body)
    // console.log(body.hasOwnProperty('name'), body.hasOwnProperty('id'), body.hasOwnProperty('price'), body.hasOwnProperty('quantity'))
    if (body.hasOwnProperty('name') && body.hasOwnProperty('id') && body.hasOwnProperty('price') && body.hasOwnProperty('quantity')) {
        // db.query('select * from Items where id=?', [body.id], (err, result) => {
        //     if (err) throw err;
        //     console.log(result);
        //     res.send(result)
        // })
        db.query('update Items set name=?,price=?, quantity=? where id=?', [body.name, (body.price), (body.quantity), (body.id)], (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            res.send(result.affectedRows + " record(s) updated")
        })
    } else {
        res.send("error")
    }
})

app.delete('/deleteItem/:id', (req, res) => {
    console.log(req.params.id)
    db.query("DELETE FROM Items WHERE id = ?", [req.params.id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    res.send()

})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
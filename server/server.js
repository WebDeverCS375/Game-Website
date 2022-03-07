const env = require("../../env.json");

const express = require("express");
const app = express();
const mysql = require("mysql2");
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

// db.query('INSERT INTO Items(name, price, quantity) values("Mario Kart", 59.99, 20);')
// db.query('INSERT INTO Items(name, price, quantity) values("Pokemon Red", 59.99, 40);')


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

app.get("/all", (req, res)=>{
    db.query('SELECT * FROM Items', 
    (err, result)=>{
        if(err){
            console.error(err)
        }else{
            res.json(result)
        }
    }
    )
})

app.post('/updateItem', (req, res)=>{
    let body = req.body
    // console.log(req.body)
    // console.log(body.hasOwnProperty('name'), body.hasOwnProperty('id'), body.hasOwnProperty('price'), body.hasOwnProperty('quantity'))
    if(body.hasOwnProperty('name') && body.hasOwnProperty('id') && body.hasOwnProperty('price') && body.hasOwnProperty('quantity')){
        // db.query('select * from Items where id=?', [body.id], (err, result)=> {
        //         if (err) throw err;
        //         console.log(result);
        //         res.send(result)
        //       })
        db.query('update Items set name=?,price=?, quantity=? where id=?', [body.name, (body.price), (body.quantity), (body.id)], (err, result)=> {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            res.send(result.affectedRows + " record(s) updated")
          })
    }else{
        res.send("error")
    }
})

app.delete('/deleteItem/:id', (req, res)=>{
    console.log(req.params.id)
    db.query("DELETE FROM Items WHERE id = ?",[req.params.id], function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
      });
    res.send()
    
})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
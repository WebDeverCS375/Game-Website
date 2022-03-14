var mysql = require('mysql2')

const db = mysql.createConnection({
    "user": "root",
    "host": "localhost",
    "password": "<password>"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL connected");
    }
});

db.query("CREATE DATABASE GameWeb;")
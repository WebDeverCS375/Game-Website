const mysql = require('mysql2')

const db = mysql.createConnection({
  "user": "root",
  "host": "localhost",
  "password": "pebra609"
});


// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   db.query("CREATE DATABASE GameWeb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

const db2 = mysql.createConnection({
  "user": "root",
  "host": "localhost",
  "password": "pebra609",
  "database": "GameWeb"
});

db2.query('drop table Items')

db2.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "create table Items( id INT AUTO_INCREMENT primary key, name varchar(128) unique, price FLOAT(2) not null, quantity INT not null);";
  db2.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
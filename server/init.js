const db = mysql.createConnection({
    "user" : "root",
    "host" : "localhost",
    "password" : "<password>"
});


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("CREATE DATABASE GameWeb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "create table Items( id INT AUTO_INCREMENT primary key, name varchar(128) unique, price FLOAT(2) not null, quantity INT not null);";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
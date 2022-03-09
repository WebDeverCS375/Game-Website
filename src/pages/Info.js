
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.json());


app.get("/Info",function(req,res)
{
	let review = req.body.review;


	res.json();
});


app.post("/Info",function(req,res) //update the following values, not sure if its fine to handle in html file in script tag or not
{
  let title = req.body.title;
	let description = req.body.description;
	let price = req.body.price;
	let category = req.body.category;

  
});




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
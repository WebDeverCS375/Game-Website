const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";



app.use(express.json());




app.get("/upload",function(req,res)
{
	let title = req.body.title;
	let description = req.body.description;
	let price = req.body.price;
	let category = req.body.category;
	

	
	res.json();
});




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});

const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.json());


app.get("/upload",function(req,res)
{
	let review = req.body.review;


	res.json();
});


app.post("/Info",function(req,res)
{
  /* multiple reviews..not needed
   let body = req.body;
    if (
        
        !body.hasOwnProperty("review") ||
      body.review=== "" 
        
    ) {
        return res.sendStatus(400);
    }
   */
});




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
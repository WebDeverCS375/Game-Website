
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.json());


app.get("/",function(req,res)
{
	res.sendFile('./info.html', { root: __dirname });
  /*
  image = req.body.picture; 
  document.querySelector("#display_image").style.backgroundImage = `url(${image})`;
  document.getElementById("title").textContent = req.body.title;
  document.getElementById("description").textContent = req.body.description;
  document.getElementById("price").textContent = req.body.price;
  document.getElementById("category").textContent = req.body.category;
  */  
});

app.post('/Info', function(res,req)
{
	

});

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
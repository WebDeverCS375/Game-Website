
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.json());


app.get("/",function(req,res)
{
	res.sendFile('./info.html', { root: __dirname });
  
});

app.post('/Info', function(res,req)
{
	

});

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
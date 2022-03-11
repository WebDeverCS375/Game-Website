const express = require("express");

const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.json());

//app.use("/public/upload.html", express.static(__dirname + '/public/upload.html'));

app.get("/",function(req,res)
{
	res.sendFile('./upload.html', { root: __dirname });
});

app.post('/upload', function(res,req)
{
	return res.redirect("/Info"); //move to info page after hitting submit
});

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
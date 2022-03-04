
const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.static("public"));


app.post("/Info",function(req,res)
{
   let body = req.body;
    if (
        
        !body.hasOwnProperty("review") ||
      body.review=== "" 
        
    ) {
        return res.sendStatus(400);
    }
    return res.redirect('/home'); //not sure where the data is supposed to be sent so I just used home as a placeholder
});




app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
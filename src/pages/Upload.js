const express = require("express");
const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.static("public"));

const image_input = document.querySelector("#image_input"); //get image input
var uploaded_image = "";

image_input.addEventListener("change", function()  
{
   const reader = new FileReader(); //use file reader object to read file
   reader.addEventListener("load", () => //add event listener load
   {
     uploaded_image = reader.result; //set global variable to uploaded file in reader
     document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`; //set display_image element to uploaded image
    });
   reader.readAsDataURL(this.files[0]);
});


app.post("/upload",function(req,res)
{
   let body = req.body;
    if (
        !body.hasOwnProperty("title") ||
        !body.hasOwnProperty("description") ||
        !body.hasOwnProperty("price") ||
        !body.hasOwnProperty("category") ||
        body.name === "" ||
      body.description === "" 
        
    ) {
        return res.sendStatus(400);
    }
    return res.redirect('/home'); //not sure where the data is supposed to be sent so I just used home as a placeholder
});

app.listen(port, hostname, () => {
    console.log(`Listening at: http://${hostname}:${port}`);
});
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");
const { response } = require("express");
const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extented: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
});


app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = process.env.URL;
    const options = {
        method: "POST",
        auth: process.env.AUTH
    };

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

    if(response.statusCode === 200){
        res.sendFile(__dirname+"/success.html");
    }else{
        res.sendFile(__dirname+"/failure.html")
    }
});


app.post("/failure", function(req, res){
    res.redirect("/");
});




app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up and running on port 3000");
});

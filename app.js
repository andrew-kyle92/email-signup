//Variables used to define middleware
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendfile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    console.log("This works");

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email

    res.write("First name: " + firstName);
    res.write("\nLast name: " + lastName);
    res.write("\nEmail: " + email);
    res.send();
});




app.listen(3002, function(){
    console.log("Server running on port 3002.");
});
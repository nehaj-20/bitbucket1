const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use('/css', express.static("css"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("welcome to my page  number 1....");
});


app.get("/about", function(req, res) {
    res.send(" About page....");
});

app.get("/calculator", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function(req, res) {
    // res.send("thankyou for your post");
    console.log(req.body);
    let a = Number(req.body.v1);
    let b = Number(req.body.v2);
    let sum = a + b;
    res.send("the sum of two number is : " + sum);
});

app.get("/bmicalc", function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmicalc", function(req, res) {
    // res.send("thankyou for your post");
    console.log(req.body);
    let y = Number(req.body.h);
    let z = Number(req.body.w);
    let bmi = z / (y * y);

    res.send("Your BMI is : " + bmi);

});


app.listen(3000, function(req, res) {
    console.log("working at port 3000");
});
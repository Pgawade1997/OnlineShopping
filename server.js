var express = require('express');
var app = express();


var bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(
        "<h1>Welcome to Vijay Sales</h1>"
        + "<hr/>"
        + "<h3>Smart Devices are </h3>"
        + "<ol>"
        + "<li>Mobile</li>"
        + "<li>Laptop</li>"
        + "<li>Tvs</li>"
        + "<li>Tablets</li>"
        + "</ol>"
    );
});

app.get('/aboutus', (req, res) => {
    res.send(
        "<h1>Welcome to Vijay Sales</h1>"
        + "<hr/>"
        + "<h3>Doing ordinary things extraordinarily </h3>"
        + "<ol>"
        + "<li>Making Revenue</li>"
        + "<li>Selling Quality not just appliances</li>"
        + "<li>Producing Feedbacks</li>"
        + "<li>Realize Responsibility</li>"
        + "</ol>"
    );
});

app.listen(9000);
console.log("Server started at 9000");
module.exports = app;
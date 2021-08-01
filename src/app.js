require("./db/mongoose");
const path = require("path");
const hbs = require("hbs"); //handlebar
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Define Path for express config
const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

// setup static directory to serve
app.use(express.static(publicDirPath));
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialPath);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('forms');
});

app.get('/admin', function (req, res) {
    res.render('admin');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/vendor', function (req, res) {
    res.render('vendor');
});


app.listen(2529, function () {
    console.log('The project is running in port 2529');
});



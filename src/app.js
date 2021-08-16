require("./db/mongoose");
const path = require("path");
const hbs = require("hbs"); //handlebar
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const userService = require('./api/users/user.service');
const vendorService = require('./api/vendor/vendor.service');
const productService = require('./api/product/product.service');
const categoryService = require('./api/category/category.service');
const subCategoryService = require('./api/subCategory/subCategory.service');
const adService = require('./api/ad/ad.service');


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
    res.render('admin',{
        title:"Global Trade Connect"
    });
});

app.get('/home', function (req, res) {
    res.render('home',{
        title:"Global Trade Connect"
    });
});

app.get('/vendor', function (req, res) {
    vendorService.getVendor(req).then((vendor) => {
        res.render('vendor', {
            title: "Global Trade Connect",
            vendor: vendor
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/vendor/add', function (req, res) {
    res.render('addVendor',{
        title:"Global Trade Connect"
    });
});


app.get('/users', function (req, res) {
    userService.getUser(req).then((users) => {
        res.render('users', {
            title: "Global Trade Connect",
            users: users
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/users/add', function (req, res) {
    res.render('addUser',{
        title:"Global Trade Connect"
    });
});

app.get('/product', function (req, res) {
    productService.getProduct(req).then((product) => {
        res.render('product', {
            title: "Global Trade Connect",
            product: product
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/product/add', function (req, res) {
    res.render('addProduct',{
        title:"Global Trade Connect"
    });
});

app.get('/category', function (req, res) {
    categoryService.getCategory(req).then((category) => {
        res.render('category', {
            title: "Global Trade Connect",
            category: category
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/category/add', function (req, res) {
    res.render('addCategory',{
        title:"Global Trade Connect"
    });
});

app.get('/subCategory', function (req, res) {
    subCategoryService.getsubCategory(req).then((subcategory) => {
        res.render('subcategory', {
            title: "Global Trade Connect",
            subCategory: subcategory
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/subCategory/add', function (req, res) {
    res.render('addsubCategory',{
        title:"Global Trade Connect"
    });
});

app.get('/ticket', function (req, res) {
    res.render('ticket',{
        title:"Global Trade Connect"
    });
});

app.get('/order', function (req, res) {
    res.render('order',{
        title:"Global Trade Connect"
    });
});

app.get('/ad', function (req, res) {
    adService.getAd(req).then((ad) => {
        res.render('ad', {
            title: "Global Trade Connect",
            ad: ad
        });
    }).catch((err) => {
        res.send('Unable to render the page');
    })
});

app.get('/ad/add', function (req, res) {
    res.render('addAd',{
        title:"Global Trade Connect"
    });
});

// app.get('/*', function (req, res) {
//     res.render('404')
// });

//routes
routes.apiRoutes(app);

app.listen(2529, function () {
    console.log('The project is running in port 2529');
});



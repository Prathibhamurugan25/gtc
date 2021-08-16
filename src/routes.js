const apiRoutes = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/admin', require('./api/admin'));
    app.use('/api/vendor', require('./api/vendor'));
    app.use('/api/product', require('./api/product'));
    app.use('/api/category', require('./api/category'));
    app.use('/api/subCategory', require('./api/subCategory'));
    app.use('/api/ad', require('./api/ad'));
}

module.exports = {
    apiRoutes
}

module.exports = (app) => {
    const customer = require("../controllers/customer.controller.js")

    app.get('/', customer.index);
    app.get('/api/customer', customer.findAll);

    app.post('/api/customer', customer.create)
    app.post('/api/customer', customer.findById)
    app.post('/api/customer', customer.update)
    app.post('/api/customer', customer.delete)


}

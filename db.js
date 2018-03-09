var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/API_Node');

var customersSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'customers'}
);


mongoose.model('customers', customersSchema);

module.exports = { Mongoose: mongoose, customerSchema: customersSchema }
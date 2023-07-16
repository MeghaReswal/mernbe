var mongoose = require('mongoose');
const db = require('./server');
// create an schema
let products = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,

});
products = mongoose.model('users', products);

console.log(db)
module.exports = {

    fetchData: function (callback) {
        var products = products.find().toArray() ;
        console.log(products)

    }
}


var mongoose = require('mongoose');

var CoffeeSchema = new mongoose.Schema({
    name: String,
    shop: String,
    amount: Number,
    upvotes: {type: Number, default: 0}
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
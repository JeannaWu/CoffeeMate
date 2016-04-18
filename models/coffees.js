var mongoose = require('mongoose');
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } },
    user: 'wzyzcz', pass: 'wzyzcz' };
var mongodbUri = 'mongodb://root:wzyzcz@ds011291.mlab.com:11291/heroku_7lnp807'
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var CoffeeSchema = new mongoose.Schema({
    name: String,
    shop: String,
    amount: Number,
    upvotes: {type: Number, default: 0}
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
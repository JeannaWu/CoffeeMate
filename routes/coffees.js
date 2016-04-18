var Coffee = require('../models/coffees');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/coffeesdb');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});

router.findAll = function(req, res) {

    Coffee.find(function(err, coffees) {
        if (err)
            res.send(err);
        else
            res.json(coffees);
    });
}

router.findOne = function(req, res) {


    Coffee.find({ "_id" : req.params.id },function(err, coffee) {
        if (err)
            res.json({ message: 'Coffee NOT Found!', errmsg : err } );
        else
            res.json(coffee);
    });
}

router.addCoffee = function(req, res) {

    var coffee = new Coffee();

    coffee.name = req.body.name;
    coffee.amount = req.body.amount;
    coffee.shop = req.body.shop;

    console.log('Adding coffee: ' + JSON.stringify(coffee));

    // Save the donation and check for errors
    coffee.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Coffee Added!', data: coffee });
    });
}

router.updateCoffee = function(req, res) {
    console.log(req.body);
    Coffee.findByIdAndUpdate(req.params.id,
        {name: req.body.name, shop: req.body.shop, amount: req.body.amount},
        function(err) {
        if (err)
            res.send(err);
            router.findAll(req,res);
    });
}


router.deleteCoffee = function(req, res) {

    Coffee.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Coffee Deleted!', data: Coffee });
    });
}

router.incrementUpvotes = function(req, res) {

    Coffee.findById(req.params.id, function(err,coffee) {
        if (err)
            res.send(err);
        else {
            coffee.upvotes += 1;
            coffee.save(function (err) {
                if (err)
                    res.send(err);
                else
                res.json({ message: 'Coffee Upvoted!', data: coffee });
            });
        }
    });
}

module.exports = router;
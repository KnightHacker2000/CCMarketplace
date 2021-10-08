'use strict';

var properties = require('../package.json');

var item1 = {
    id: 1,
    name: "xxx",
    price: 2,
    storage: 1
};

var item2 = {
    id: 2,
    name: "ABC",
    price: 0.0,
    storage: 0
};

var item3 = {
    id: 3,
    name: "xyZ",
    price: 2.99,
    storage: 9999
};

var items = {
    stocks: [item1, item2, item3]
};

var controllers = {
    getInventory: function(req, res) {
       res.json(items);
    },
    getItemById: function(req, res) {
        res.json(items.stocks.filter(function (el) {
        return el.id == req.params.id;}));
    }
};

module.exports = controllers;
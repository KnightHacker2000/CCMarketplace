'use strict';

const controller = require('./controller');

module.exports = function(app) {
    app.route('/inventory')
       .get(controller.getInventory);
    app.route('/inventory/:id')
       .get(controller.getItemById);
       

};
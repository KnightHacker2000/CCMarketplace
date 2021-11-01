const http = require('http');
const stockApp = require('./backend/stockService')
const orderApp = require('./backend/orderService')
const shipApp = require('./backend/shipService')

const port_stock = process.env.PORT || 3000;
const port_order = process.env.PORT || 8080;
const port_ship = process.env.PORT || 9000;

stockApp.set('port',port_stock);
orderApp.set('port',port_order);
shipApp.set('port',port_ship);


const orderServer = http.createServer(orderApp);
const stockServer = http.createServer(stockApp);
const shipServer = http.createServer(shipApp);

orderServer.listen(port_order);
stockServer.listen(port_stock);
shipServer.listen(port_ship);
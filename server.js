const http = require('http');
const stockApp = require('./backend/stockService')
const orderApp = require('./backend/orderService')
const payApp = require('./backend/paymentService')
const shipApp = require('./backend/shipService')

const port_stock = process.env.PORT || 3000;
const port_pay = process.env.PORT || 7000;
const port_order = process.env.PORT || 8080;
const port_ship = process.env.PORT || 9000;

stockApp.set('port',port_stock);
orderApp.set('port',port_order);
shipApp.set('port',port_ship);
payApp.set('port',port_pay);


const orderServer = http.createServer(orderApp);
const stockServer = http.createServer(stockApp);
const paymentServer = http.createServer(payApp);
const shipServer = http.createServer(shipApp);

orderServer.listen(port_order);
stockServer.listen(port_stock);
paymentServer.listen(port_pay);
shipServer.listen(port_ship);

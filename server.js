const http = require('http');
const stockApp = require('./backend/stockService')
const orderApp = require('./backend/orderService')

const port_stock = process.env.PORT || 3000;
const port_order = process.env.PORT || 8080;

stockApp.set('port',port_stock);
orderApp.set('port',port_order);


const orderServer = http.createServer(orderApp);
const stockServer = http.createServer(stockApp);

orderServer.listen(port_order);
stockServer.listen(port_stock);
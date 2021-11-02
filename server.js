const http = require('http');
const stockApp = require('./backend/stockService')
const orderApp = require('./backend/orderService')
const payApp = require('./backend/paymentService')

const port_stock = process.env.PORT || 3000;
const port_payment = process.env.PORT || 3001;
const port_order = process.env.PORT || 3002;

stockApp.set('port',port_stock);
orderApp.set('port',port_order);
payApp.set('port',port_payment)


const orderServer = http.createServer(orderApp);
const stockServer = http.createServer(stockApp);
const paymentServer = http.createServer(payApp);

orderServer.listen(port_order);
stockServer.listen(port_stock);
paymentServer.listen(port_payment);

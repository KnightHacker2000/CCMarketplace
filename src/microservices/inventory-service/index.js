const express = require('express')
const app = express();
const port = process.env.PORT || 4200;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
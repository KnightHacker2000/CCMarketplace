// Use Express
var express = require('express');

// Create new instance of the express server
var app = express();
var http = require('http');

var payment = []

//resolves CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');// no matter which domain the app sending the request is running on, we allow it to access our resources

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS"); 

    next();
});

app.post('/api/new_payment',(req,res)=>{
    payment = req.body;
    // console.log(availability.find(x => x.id == 'TMT').quant);
    console.log("new payment",req.body)
    res.status(201).json({
        message: 'in payment service -- new paymnet received successfully from order service!',
    }); // new resource created
});

module.exports= app;
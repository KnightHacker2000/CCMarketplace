// Use Express
var express = require('express');

// Create new instance of the express server
var app = express();
var availability;
var order;
var msg;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//resolves CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');// no matter which domain the app sending the request is running on, we allow it to access our resources

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS"); 

    next();
});

app.post("/api/order",(req,res,next)=>{
    order = req.body;
    console.log(order.order.itemArr[0]);
    for(i=0; i<order.order.itemArr.length;i++){
        var item = order.order.itemArr[i];
       var quant_avail =  availability.find(x => x.id == item.stock_code).quant;
       if(item.amount !=0 &&  item.amount > quant_avail){
            msg = {
                notAvailItem: item,
                error: "Not Enough Stock",
                code: "error"
            }
            console.log("order corrupted")
            break;
       }
    }
    console.log(typeof msg);
    if(typeof msg == 'undefined'){
        msg = {
            code: "3413515133"
        }
    }
    res.status(201).json({
        response: msg
    }); // new resource created
});

app.post('/api/availability',(req,res,next)=>{
    availability = req.body;
    console.log(availability.find(x => x.id == 'TMT').quant);
    res.status(201).json({
        message: 'in orderservice on server -- availability received successfully!',
    }); // new resource created
});

module.exports= app;
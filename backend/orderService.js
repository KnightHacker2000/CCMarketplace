// Use Express
var express = require('express');
// Use firebase db
var admin = require("firebase-admin");
var serviceAccount = require(__dirname + "/key/ccmarket-4302b-firebase-adminsdk-4cev2-283f17c743.json");
var http = require('http');
// Initialize the app with a service account, granting admin privileges
var order_app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ccmarket-4302b-default-rtdb.firebaseio.com"
  }, "secondary");

var db = order_app.database();
var db_count = -1;

// posting new payment to port 7000
var options = {
	host: "localhost",
    port:3000,
	path: "/api/new_availability",
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	}
};

db.ref('count/length').get().then((snapshot) => {
    if (snapshot.exists()) {
        db_count = snapshot.val();

    } else {
        console.log("Count not found");
    }
    }).catch((error) => {
        console.error(error);
    });

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

    // update stock service of the new availability
    // post_req = http.request(options, (res) => {
        
    //     res.setEncoding('utf8');
    //     res.on('data', (chunk) => {
    //         console.log(`BODY: ${chunk}`);
    //     });
    //     res.on('end', () => {
    //         console.log('No more data in response.');
    //     });
                
    // });
        
    // post_req.on('error', (e) => {
    //     console.error(`problem with request: ${e.message}`);
    // });

    // console.log(typeof(order.payment_info))
    // // write data to request body
    // post_req.write(JSON.stringify(order.payment_info));
    // post_req.end();

    console.log(order.order.itemArr[0]);
    console.log(order);
    ordered_items = [];
    for(i=0; i<order.order.itemArr.length;i++){
        var item = order.order.itemArr[i];
        if (item.amount > 0){
            ordered_items.push(item);
        }
        
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
    console.log("typeof msg",typeof msg);

    
    if(typeof msg == 'undefined'){
        order.order.itemArr = ordered_items;
        order.status = "need to process";
        console.log("new iteration: dbcount:" + db_count);
        var path = 'orders/'.concat(db_count);
        db.ref(path).set(order); //insert the new order in db

        msg = { 
            code: "009778749" + db_count  //return the unique confirmation number
        }
        db_count = db_count + 1;
        db.ref('count').update({
            'length': db_count
        });

        ordered_items.forEach((item) => {
            quantity = availability.find(x => x.id == item.stock_code).quant - item.amount
            availability.find(x => x.id == item.stock_code).quant = quantity
        })

        // console.log("new avail: ",availability)

        // update stock service of the new availability
        // post_req = http.request(options, (res) => {
        
        //     res.setEncoding('utf8');
        //     res.on('data', (chunk) => {
        //         console.log(`BODY: ${chunk}`);
        //     });
        //     res.on('end', () => {
        //         console.log('No more data in response.');
        //     });
                    
        // });
            
        // post_req.on('error', (e) => {
        //     console.error(`problem with request: ${e.message}`);
        // });
        // console.log(JSON.stringify(availability))
        // // write data to request body
        // post_req.write(JSON.stringify(availability));
        // post_req.write(JSON.stringify(availability));
        // post_req.end();

        //send payment info to payment service
        var options_pay = {
            url:"http://localhost:7000/api/new_payment",
            rejectUnauthorized: false
        };
        const got = require('got');  //use GOT library
        try{
            (async () => {
                const {body} = await got.post(options_pay, {
                    json: {
                        "amount": order.payment_info.amount, 
                        "cardNum": order.payment_info.cardNum,
                        "exp": order.payment_info.exp,
                        "cvv": order.payment_info.cvv,
                        "name": order.payment_info.name
                    },
                    responseType: 'json'
                });
            
                console.log("in order service, payment posting section",body);
            })();
        }

        catch (e) {
            throw e.response ? e.response.body.message : e;
           }


        //send ship info to shipment service
        var options_ship = {
            url:"http://localhost:9000/api/ship",
            rejectUnauthorized: false
        };
        try{
            (async () => {
                const {body} = await got.post(options_ship, {
                    json: {
                        "email": order.shipping_info.email, 
                        "name": order.payment_info.name,
                        "address": order.shipping_info.postal,
                        "business entity": order.shipping_info.method
                    },
                    responseType: 'json'
                });
            
                console.log(body);
            })();
        }
        catch (e) {
            throw e.response ? e.response.body.message : e;
           }
            
        
    }
    res.status(201).json({
        response: msg
    }); // new resource created
    msg = undefined; //set msg to undefined so it doesn't affect next post request
    
});

app.post('/api/availability',(req,res,next)=>{
    availability = req.body;
    console.log(availability.find(x => x.id == 'TMT').quant);
    res.status(201).json({
        message: 'in orderservice on server -- availability received successfully!',
    }); // new resource created
});

module.exports= app;



function writeOrder(confirmation, itemList, cardNum, exp, cvv, name, postal, method, email, fee){
    db.ref('orders/' + confirmation).set({  //use confirmation number as id
        cardNum: cardNum,
        exp: exp,
        cvv: cvv,
        name: name, 
        postal: postal, 
        method: method, 
        email: email,
        fee: fee
    });

    //TODO: set items
    db.ref('orders/'+confirmation+'/items').set(itemList);
}
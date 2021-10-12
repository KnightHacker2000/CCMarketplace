// Use Express
var express = require('express');

// Create new instance of the express server
var app = express();
var http = require('http');

var stocks = [
    {
        name: 'Taro Milk Tea', 
        description: "Taro! Taro! Taro!",  
        id: "TMT",
        price: 15, 
        unit: "Cup",
        imgsrc: "../../assets/taro-milk-bubble-tea.jpeg"
    },
    {
        name: 'Hong Kong Milk Tea', 
        description: "OG Milk Tea",
        id: "HKMT",  
        price: 5, 
        unit: "Cup",
        imgsrc: "../../assets/hong-kong-milk-tea.jpeg"
    },
    {
        name: 'Caramel Pudding Milk Tea', 
        description: "Fusion Tea!",
        id: "CPMT",  
        price: 6, 
        unit: "Cup",
        imgsrc: "../../assets/caramel.jpeg"
    },
    {
        name: 'Mango Milkshake',
        description: "Fresh mango, Milk and Tea!",
        id: "MM",
        price: 7,
        unit: "Cup",
        imgsrc: "../../assets/mango-milkshake.jpeg"

    },
    {
        name: 'Americano Coffee', 
        description: "Original American Flavor!", 
        id: "AC", 
        price: 8, 
        unit: "Cup", 
        imgsrc: "../../assets/americano.jpeg"
    }
]

const availability = [
    {
        id: 'TMT',
        quant: 90
    },

    {
        id: 'HKMT',
        quant: 10
    },

    {
        id: 'CPMT',
        quant: 5
    },

    {
        id: 'MM',
        quant: 0
    },

    {
        id: 'AC',
        quant: 1
    }

]

var options = {
	host: "localhost",
    port:8080,
	path: "/api/availability",
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	}
};

//resolves CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');// no matter which domain the app sending the request is running on, we allow it to access our resources

    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS"); 

    next();
});

app.get("/api/stock", function (req, res) {
    // console.log("[Micro: Stock] -- stocks:", stocks);

    res.status(200).json({ 
        message: "Stocks fetched successfully!",
        stocks: stocks
    });
});

const post_req = http.request(options, (res) => {
        
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});
    
post_req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
post_req.write(JSON.stringify(availability));
post_req.end();

app.get("/api/stocks/:id", function(req, res) {
    res.status(200).json(
        {stock: stocks.availability.find(x => id = req.params.id)}
    );
});


module.exports= app;
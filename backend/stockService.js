const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// Use Express
var express = require('express');

// Create new instance of the express server
var app = express();
var http = require('http');

var serviceAccount = require(__dirname + "/key/ccmarketplace-329522-87bd96500675.json");
const stockBase = initializeApp({
    credential: cert(serviceAccount)
}, "[DEFAULT]");
const db = getFirestore();


// var admin = require("firebase-admin");

// initializeApp({
//     credential: credential.cert(serviceAccount)
// });
// const firestore_app = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// const db = admin.getFirestore(firestore_app);

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

let availability = [
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

async function add_stocks(){
    col_ref = await db.collection('stocks')
    // deleteCollection(db, col_ref, 10)
    // console.log(typeof(stocks[0]))
    stocks.forEach(item => col_ref.doc(item.id).set(item))
}

// add_stocks();

async function add_avail(availability){
    col_ref = await db.collection('avail')
    // deleteCollection(db, col_ref, 10)
    // console.log(typeof(stocks[0]))
    availability.forEach(item => col_ref.doc(item.id).set(item))
}
// add_avail();


async function deleteCollection(db, collectionRef, batchSize) {
    const query = collectionRef.limit(batchSize);
  
    return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
    });
  }
  
  async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();
  
    const batchSize = snapshot.size;
    if (batchSize === 0) {
      // When there are no documents left, we are done
      resolve();
      return;
    }
  
    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
  
    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(db, query, resolve);
    });
  }

var options = {
	host: "localhost",
    port:3002,
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

app.get("/api/stock", async function (req, res) {
    // console.log("[Micro: Stock] -- stocks:", stocks);
    stocks_from_DB = []
    doc_ref = await db.collection('stocks').get()
    // console.log(doc_ref)
    doc_ref.docs.forEach((doc_snapshot) => stocks_from_DB.push(doc_snapshot.data()));

    res.status(200).json({ 
        message: "Stocks fetched successfully!",
        stocks: stocks_from_DB
    });
});

avail_from_DB = []

app.post('/api/new_availability',(req,res)=>{
    availability = req.body;
    // console.log(availability.find(x => x.id == 'TMT').quant);
    console.log("new availability",req.body)
    res.status(201).json({
        message: 'in stock service -- new availability received successfully from order service!',
    }); // new resource created
});

async function getAvail(){
    doc_ref = await db.collection('avail').get()
    // console.log(doc_ref)
    doc_ref.docs.forEach((doc_snapshot) => avail_from_DB.push(doc_snapshot.data()));
}

const post_req = http.request(options, (res) => {
        
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });

    getAvail()
    
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
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


//Initialize firebase db
var serviceAccountStock = require(__dirname + "/key/ccmarketplace-329522-87bd96500675.json");
const stockBase = initializeApp({
    credential: cert(serviceAccountStock)
}, "[DEFAULT]");
const db2 = getFirestore();


// Intitialize realtime db
var admin = require("firebase-admin");
var serviceAccount = require(__dirname + "/key/ccmarket-4302b-firebase-adminsdk-4cev2-283f17c743.json");
var http = require('http');
const { exit } = require('process');

// Initialize the app with a service account, granting admin privileges
var order_app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ccmarket-4302b-default-rtdb.firebaseio.com"
  }, "secondary");
order_ids = [];
order_details = [];
var db = order_app.database();
var ref = db.ref('orders');

// Read orders information from realtime db
ref.orderByChild('status').equalTo("need to process").on('child_added', (snapshot) => {
  console.log(snapshot.key);
  order_ids.push(snapshot.key);
  console.log(snapshot.child('order').child('itemArr').val());
  order_details.push(snapshot.child('order').child('itemArr').val());
});

// Read and write cloud firebase db availability
ref.once('value', async function(){
  // for testing purpose, resets the availability
  var doc_reset = db2.collection('avail').doc('AC');
  const res_reset = await doc_reset.update({quant: 1});

  console.log('----------------------');
  for(i=0; i<order_details.length; i++){
      var inst_order = order_details[i];
      for (j=0; j<inst_order.length;j++){
        var item = inst_order[j];
        var doc = db2.collection('avail').doc(item.stock_code);
        var ret = await doc.get();
        var quant = ret.data().quant;
        var new_quant = quant - item.amount;
        const res = await doc.update({quant: new_quant});
        console.log("quant is : ",quant);
        console.log("new amount is : ",new_quant);
        console.log('----------------------');
      }
  }

  // update realtime db status
  for (i=0;i<order_ids.length;i++){
    var id = order_ids[i];
    const return_update = db.ref('orders/'+id+'/status').set("completed");
    console.log("id status updated :", id);
    console.log(return_update);
    console.log('----------------------');
  }
  exit(0);
});








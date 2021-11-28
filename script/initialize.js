const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// this script is for testing purposes only,run node initialize.js to reset the database

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

var order_app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ccmarket-4302b-default-rtdb.firebaseio.com"
  }, "secondary");
order_ids = [];
order_details = [];
var db = order_app.database();
var ref = db.ref('orders');

ids =[-1,0,1,2,3,4,5,7,8,9,10,11]
for (i=0;i<ids.length;i++){
    var id = ids[i];
    const return_update = db.ref('orders/'+id+'/status').set("pending");
    console.log("id status updated :", id);
    console.log(return_update);
    console.log('----------------------');
}


ref.orderByChild('status').equalTo("pending").on('child_added', (snapshot) => {
  order_ids.push(snapshot.key);
  order_details.push(snapshot.child('order').child('itemArr').val());
});

ref.once('value', async function(){
  var doc_reset1 = db2.collection('avail').doc('AC');
  const res_reset1 = await doc_reset1.update({quant: 1});

  var doc_reset2 = db2.collection('avail').doc('CPMT');
  const res_reset2 = await doc_reset2.update({quant: 5});

  var doc_reset3 = db2.collection('avail').doc('HKMT');
  const res_reset3 = await doc_reset3.update({quant: 10});

  var doc_reset4 = db2.collection('avail').doc('MM');
  const res_reset4 = await doc_reset4.update({quant: 0});

  var doc_reset5 = db2.collection('avail').doc('TMT');
  const res_reset5 = await doc_reset5.update({quant: 100});
  
});
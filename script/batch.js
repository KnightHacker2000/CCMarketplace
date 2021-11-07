import { collection, query, where, getDocs } from "firebase/firestore";// Use Express
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
const q = query(db, where("state", "==", "CA"));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});



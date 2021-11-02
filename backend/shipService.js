// const got = require('got');

// (async () => {
//   try {
//     const response = await got.get('https://www.google.com')
//     console.log(response.body)
//     console.log(response.body.url)
//     console.log(response.body.explanation)
//   } catch (error) {
//     console.log(error);
//   }
// })();

var express = require('express');

var app = express();
var options = {
	host: "localhost",
    port:9000,
	path: "/api/ship",
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	}
};

app.use(express.text({
  type: function(req) {
    return 'text';
  }
}));
// app.use(bodyParser.text({
//   type: function(req) {
//     return 'text';
//   }
// }));

//resolves CORS
// app.use((req,res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin','*');// no matter which domain the app sending the request is running on, we allow it to access our resources

//   res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS"); 

//   next();
// });

app.post("/api/ship",(req,res,next)=>{
  console.log(req.body);
  console.log(typeof req.body);
  res.status(201).json({
    message: 'shipment request received',
  });
});

module.exports= app;
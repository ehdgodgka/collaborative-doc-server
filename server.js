require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cross-origin resource sharing
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// create a home route to test if the server works
app.get('/', function (req, res) {
  res.send('all green');
});



app.post('/change', function (req, res) {

});

let port = process.env.PORT || 5000;
console.log(`server running on port ${port}`);
// run the server on our specified port
app.listen(port);

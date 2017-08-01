const express = require('express');
// const webpack = require('webpack');
const http = require('http');
const path = require('path');
var middleware = require(path.join(__dirname, '/src/middleware/serveMaster'));

const app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');  


// app.use(express.errorHandler());
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use(middleware.development());


// app.get('/', (req, res) => {
//   res.send('Boo!');
// });


http.createServer(app).listen(app.get('port'), function() {
  var environment = process.env.NODE_ENV || 'development';
  console.log(`Tic-Tac-Toe started: ${app.get('port')} (${environment})`);
})
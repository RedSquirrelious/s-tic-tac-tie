// const express = require('express');
// const http = require('http');
// const path = require('path');


// const app = express();


// app.set('port', process.env.PORT || 3000);
// app.set('views', './app/views');


// // app.configure('development', function() {
//   app.use(express.errorHandler());
//   app.use(express.static(path.join(__dirname, 'build')));
//     // app.use(middleware.serveMaster.development());
// // });


// app.get('/', (req, res) => {
//   res.send('Boo!');
// });

// // app.listen(3000, () => {
// //   console.log('This application is running on localhost:3000');
// // });

// http.createServer(app).listen(app.get('port'), function() {
//   var environment = process.env.NODE_ENV || 'development';
//   console.log(`Tic-Tac-Toe started: ${app.get('port')} (${environment})`);
// })
// import _ from 'underscore';   
var _ = require('underscore');

// // var client = require('./../client');

function skipMaster(req) {
  return _.any(['/api', '/components', '/css', '/js', '/build'], function(url) {
    return req.url.substring(0, url.length) === url;
  });
}

function handler(title, vendorCss, appCss, font, mainJs) {
  return function(req, res, next) {
    if (skipMaster(req)) {
      res.end();
    }
    res.render('index', {title: title, vendorCss: vendorCss, appCss: appCss, font: font, mainJs: mainJs});
    // res.render('index');
  };
}

module.exports = {
  development: function() {
    return handler('Tic-Tac-Toe | Development', 
                    '/public/css/foundation.css', 
                    '/public/css/app.css', 
                    'https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Rock+Salt', 
                    '/public/build/app.bundle.js');
  }
};
// //   // ,
// //   // production: function() {
// //   //   return handler('Tic-Tac-Toe | Production', client.vendor.css, client.app.css, client.js);
// //   // }
// // };

// var _ = require('underscore');
// var client = require('./../client');

// function skipMaster (req) {
//   return _.any(['/api', '/components', '/css', '/js', '/build'], function (url) {
//     return req.url.substr(0, url.length) === url;
//   });
// }

// function hander(title, mainJs, mainCss) {
//   return function (req, res, next) {
//     if (skipMaster(req)) {
//       return next();
//     }

//     res.render('master', { title: title, mainJs: mainJs, mainCss: mainCss});
//   };
// }

// module.exports = {
//   development: function () {
//     return handler('SPA Boilerplate | Development', '/js/main.js', '/css/main.css');
//   }
// };
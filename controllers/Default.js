'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.rootGet = function rootGet (req, res, next) {
  

  var result = Default.rootGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.rootPost = function rootPost (req, res, next) {
  var name = req.swagger.params['name'].value;
  var year = req.swagger.params['year'].value;
  

  var result = Default.rootPost(name, year);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.test-pathIdGet = function test-pathIdGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Default.test-pathIdGet(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var dashboard = require('../controllers/dashboard.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
  	dashboard.show(req, res)
  })
  app.post('/new', function(req,res){
    dashboard.create(req, res)
  })
  app.get('/showinfo/:id', function(req,res){
  	dashboard.getinfo(req,res)
  })
  app.get('/editinfo/:id', function(req,res){
  dashboard.editinfo(req,res)
  })
  app.post('/update/:id', function(req,res){
  dashboard.update(req, res)
  })
  app.post('/destroy/:id', function(req,res){
  dashboard.destroy(req,res)
  })
}
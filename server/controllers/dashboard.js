var mongoose = require('mongoose');
var Dashboard = mongoose.model('Dashboard');
module.exports = {
  show: function(req, res) {
    Dashboard.find({}, function(err, result) {
      // console.log(result);
      if(err){
      res.json(err)
    }else{
      res.render('index', {result: result});
    }
    })
  },
  create: function(req, res) {
    var dashboard = new Dashboard({name: req.body.name, class: req.body.class});
    dashboard.save(function(err) {
      if(err){
          res.json(err)
          console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  }, 
  getinfo : function(req,res){
      Dashboard.find({_id: req.params.id}, function(err, result){
        console.log(result);
      if(err){
        res.json(err);
      } else {
             res.render('main', {result : result});
          }
    });
  },
  editinfo : function(req,res){
      Dashboard.find({_id: req.params.id}, function(err, result){
        console.log(result);
      if(err){
        res.json(err);
      } else {
             res.render('edit', {result : result});
          }
    });
  },
  update : function(req,res){
    Dashboard.findOne({_id: req.params.id}, function(err, user){
    user.name = req.body.name;
    user.class = req.body.class;
    user.save(function(err) {
      if(err){
          res.json(err)
          console.log("something went wrong");
      } else {
        res.redirect('/');
      }
    })
  })   
},
  destroy : function(req,res){
    Dashboard.remove({_id: req.params.id}, function(err){
      if(err){
        res.json(err);
      } else {
             res.redirect('/');
          }
    });
  }
}
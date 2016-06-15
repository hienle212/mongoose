// require mongoose
var mongoose = require('mongoose');
// create the schema
var DashboardSchema = new mongoose.Schema({
  name: { type: String, required: true},
  class: { type: String, required: true}
}, {timestamps: true})
// register the schema as a model
var Dashboard = mongoose.model('Dashboard', DashboardSchema);
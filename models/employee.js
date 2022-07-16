 const mongoose = require('mongoose');

 // mongo will automatically create a model that has the plural noun of our model !

 var Employee = mongoose.model('Employee',{
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type : Number}
 });

 module.exports = {
    Employee
 };

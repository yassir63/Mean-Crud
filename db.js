const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Crud', (err) => {
    if(!err)
    console.log('Connection Succesful !');
    else
    console.log('Connection Failed !' + JSON.stringify(err, undefined,2));
})

module.exports = mongoose;
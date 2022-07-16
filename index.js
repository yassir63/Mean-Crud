const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js')

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'})); // necessary to allow resource sharing and connect nodejs to angular

app.listen(3000, () => console.log('Server Running on port 3000 !'));

app.use('/employees', employeeController);
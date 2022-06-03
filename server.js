const express = require('express');
const app = express();
require('dotenv').config({});
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fantasyController = require('./controllers/fantasyServer');

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(fantasyController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
});

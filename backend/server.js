const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();


const { ProductsList} = require('./data');

const PORT = 4000;

app.get('/products', (_, res) => res.send({ products: ProductsList }));


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
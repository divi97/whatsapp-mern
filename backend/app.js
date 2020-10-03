const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var dotenv = require('dotenv').config(path.resolve(process.cwd(), './.env'));
const PORT = process.env.PORT || 3210;
const cors = require('cors');

const app = express();

app.use(cors);


app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
});
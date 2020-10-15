const express = require('express');
// const mongoose = require('mongoose');
var path = require('path');
var dotenv = require('dotenv').config(path.resolve(process.cwd(), './.env'));
const PORT = process.env.PORT || 3210;
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

require('./routes/routes')(app)

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
});

module.exports = app
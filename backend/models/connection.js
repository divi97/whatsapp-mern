const mongoose = require('mongoose');

mongoose.connect(process.env.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
  if (!err) {
    console.log("Successfully connected to database");
  } else {
    console.log("Error connecting to database");
  }
});

module.exports = mongoose;
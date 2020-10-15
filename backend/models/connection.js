const mongoose = require('mongoose');
const Pusher = require('pusher');
const pusher = require('./pusher')

mongoose.connect(process.env.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
  if (!err) {
    console.log("Successfully connected to database");
  } else {
    console.log("Error connecting to database");
  }
});

const db = mongoose.connection

db.once('open', () => {
  console.log('MongoDB connection opened');
  
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch()

  changeStream.on('change', (change) => {
    // console.log(change)

    if(change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received
      })
    } else {
      console.log('Error triggering Pusher')
    }
  })
});


module.exports = mongoose;
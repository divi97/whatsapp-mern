const mongoose = require('./connection');

const whatsappSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

module.exports = mongoose.model('messagecontent', whatsappSchema);
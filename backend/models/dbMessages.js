const mongoose = require('./connection');

const whatsappSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String
});

module.exports = mongoose.model('messagecontent', whatsappSchema);
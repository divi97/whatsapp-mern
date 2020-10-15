const express = require('express');
const router = express.Router();

const { createMessage } = require('./controllers/newMessage');
const { getMessage } = require('./controllers/getMessages')

router.post('/new', createMessage);
router.get('/sync', getMessage)

module.exports = router;
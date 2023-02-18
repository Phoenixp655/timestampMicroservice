const express = require('express');
const TimestampController = require('../controllers/TimestampController')
const router = express.Router();

router.post('/:unix',(req, res) => {
    TimestampController
})

exports.Router
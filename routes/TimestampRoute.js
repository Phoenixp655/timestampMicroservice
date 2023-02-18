const express = require('express');
const TimestampController = require('../controllers/TimestampController')
const router = express.Router();

router.get('/:date',(req, res) => {
    res.json({date: new Date()})
})

module.exports = router
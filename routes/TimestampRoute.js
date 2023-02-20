const express = require('express');
const TimestampController = require('../controllers/TimestampController')
const router = express.Router();

router.get('/:date', (req, res) => {
  TimestampController.timestamp(req, res, req.params.date);
})

module.exports = router
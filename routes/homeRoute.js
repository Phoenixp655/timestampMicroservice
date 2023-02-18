const express = require('express');
const path = require('path')
const router = express.Router();
const {renderIndex} = require('../controllers/homeController')


router.get('/', (req, res) => {
    renderIndex(req, res);
})

module.exports = router
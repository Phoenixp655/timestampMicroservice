const express = require('express');
const path = require('path')
const router = express.Router();


router.get('/', (req, res) => {
    const absolutePath = path.parse(__dirname).dir + 'views/index.html'
    console.log(absolutePath)
    res.render('index')
})

module.exports = router
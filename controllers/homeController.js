const express = require('express');

const renderIndex = (rea, res) => {
    res.render('index')
}

module.exports = {
    renderIndex,
}
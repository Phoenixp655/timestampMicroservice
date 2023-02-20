const express = require('express');

const timestamp = (req, res, paramURI) => {
  const date = new Date(+paramURI||paramURI);
  date != "Invalid Date" ? res.json({'unix': date.valueOf(), 'utc': date.toUTCString()}) 
    : res.json({error: 'Invalid Date'})
}

module.exports = {
  timestamp,

}
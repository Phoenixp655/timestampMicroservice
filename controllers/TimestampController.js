const express = require('express');

const timestamp = (req, res, paramURI) => {
  /[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}|^[0-9]*$/g.test(paramURI) 
    ? res.json({"unix": new Date(paramURI).valueOf()|| paramURI, 
                "utc": new Date(+paramURI||paramURI).toUTCString()}) 
    : res.json({"error": "invalid date"});
}

module.exports = {
  timestamp,

}
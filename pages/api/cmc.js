const express = require('express');
const axios = require('axios');
const https = require('https');
require('dotenv').config();
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', (req, res) => {
  var config = {
    method: 'get',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1`,
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
      'Accept': 'application/json'
    }
  };

  axios(config)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;

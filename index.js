const express = require('express');
const axios = require('axios');
const https = require('https');
require('dotenv').config();
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json({ extended: false}));
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
app.get('/',cors(), (req, res,next) => {
  const headers = {
    'X-CMC_PRO_API_KEY': process.env.API_KEY
  }
  axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${req.headers.id}`,{headers})
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.send("error"+error);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
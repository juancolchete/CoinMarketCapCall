// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var axios = require('axios');
export default function handler(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  var config = {
    method: 'get',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${req.query.id}`,
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
}

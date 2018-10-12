
const bodyParser = require('body-parser');
const express = require('express');
const apiKey = 'YELP_KEY';
const yelp = require('yelp-fusion');
const axios = require('axios');

const client = yelp.client(apiKey);




const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {

  axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      term: "food",
      location: "san francisco, ca", 
      limit: 4

    },
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
  .then(({data}) => res.json(data))
  .catch(er => console.log(er))
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));



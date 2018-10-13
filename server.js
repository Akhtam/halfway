
const bodyParser = require('body-parser');
const express = require('express');
const apiKey = 'lbB1ejiqGjJZsh8FhIsJ9A-XSVcIv40d0FFgRbq2dVNfv5ucpmH4tmBeHYJTW66KWfnQ4wDQ9Ri-KF0ZVOqJaPN0fxlzJEmEKSe3H5ZyAv9JDZe-GlpHwvsF_Mu9W3Yx';
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
  .then(({data}) => res.json(data.businesses))
  .catch(er => console.log(er))
});


app.listen(port, ()=> console.log(`Listening on port ${port}`));



import axios from 'axios';

const getMiddlePoint = (url, key, locationA, locationB) => {
  axios.get(url, {
    params: {
      address: location,
      key,
    }
  })
  .then(res => [res.data.results[0].geometry.location.lat,res.data.results[0].geometry.location.lng])
  .then(err => console.log(err))
}
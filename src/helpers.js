import axios from 'axios';

const calculateMid = data => {
  let num_coords = data.length;

  let X = 0.0;
  let Y = 0.0;
  let Z = 0.0;

  for (let i = 0; i < data.length; i++) {
    let lat = (data[i][0] * Math.PI) / 180;
    let lon = (data[i][1] * Math.PI) / 180;

    let a = Math.cos(lat) * Math.cos(lon);
    let b = Math.cos(lat) * Math.sin(lon);
    let c = Math.sin(lat);

    X += a;
    Y += b;
    Z += c;
  }

  X /= num_coords;
  Y /= num_coords;
  Z /= num_coords;

  let lon = Math.atan2(Y, X);
  let hyp = Math.sqrt(X * X + Y * Y);
  let lat = Math.atan2(Z, hyp);

  let newX = (lat * 180) / Math.PI;
  let newY = (lon * 180) / Math.PI;

  return [newX, newY];
};

const getMiddlePoint = async (url, key, locationA, locationB) => {
  try {
    const locA = await axios
      .get(url, {
        params: {
          address: locationA,
          key
        }
      })
      .then(res => [
        res.data.results[0].geometry.location.lat,
        res.data.results[0].geometry.location.lng
      ]);

    const locB = await axios
      .get(url, {
        params: {
          address: locationB,
          key
        }
      })
      .then(res => [
        res.data.results[0].geometry.location.lat,
        res.data.results[0].geometry.location.lng
      ]);

    const mid = await Promise.all([locA, locB]);
    return calculateMid(mid);
  } catch (e) {
    console.log(e);
  }
};

export default getMiddlePoint;

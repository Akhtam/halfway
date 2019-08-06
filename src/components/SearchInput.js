import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import keys from '../config/keys';
import getMiddlePoint from '../helpers/midpointHelper';

const btnStyle = {
  backgroundColor: '#479da0',
  color: 'white'
};

const url = 'https://maps.googleapis.com/maps/api/geocode/json';

const SearchInput = ({ getResults }) => {
  const [locationA, setInputA] = useState('');
  const [locationB, setInputB] = useState('');
  //handle submit button
  const handleSubmit = async e => {
    e.preventDefault();
    const key = keys.API_KEY;
    if (locationA.length > 5 && locationB.length > 5) {
      const { calcMiddle, geoLocationA, geoLocationB } = await getMiddlePoint(
        url,
        key,
        locationA,
        locationB
      );
      const locA = {
        geoLoc: geoLocationA,
        fullAddress: locationA
      };
      const locB = {
        geoLoc: geoLocationB,
        fullAddress: locationB
      };
      console.log(calcMiddle);
      getResults(calcMiddle, locA, locB);
      setInputA('');
      setInputB('');
    } else {
      alert('please enter Address');
    }
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <input
            value={locationA}
            placeholder="Location A"
            name="inputA"
            onChange={e => setInputA(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            value={locationB}
            placeholder="Location B"
            name="inputB"
            onChange={e => setInputB(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" style={btnStyle} onClick={handleSubmit}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchInput;

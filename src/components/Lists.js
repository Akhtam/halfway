import React from 'react';
import Results from './Results';
import { Header } from 'semantic-ui-react'

const lists = {
  margin: '20px 20px',
  width: '40%',
	backgroundColor: 'white',
};


const Lists = props => {
  const ren = props.result.map(el => <Results key={el.id} {...el}/>);
  return (
    <div>
      <div style={lists}>{ren}</div>;
    </div>
  );
};

export default Lists;

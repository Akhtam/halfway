import React from 'react';
import Results from './Results';


const lists = {
  margin: '30px 20px',
  width: '50%',
  backgroundColor: 'white',
  position: 'absolute',
  left: '50px'
};


const Lists = props => {
  const ren = props.result.map(el => <Results key={el.id} {...el}/>);
  return (
    <div>
      <div style={lists}>{ren}</div>
    </div>
  );
};

export default Lists;

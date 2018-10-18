import React from 'react';
import Results from './Results';

const lists = {
  margin: 'auto',
  marginTop: '30px',
  width: '41%',
  backgroundColor: 'white',
  position: 'absolute',
  left: '6%',
  height: '650px',
  overflowY: 'scroll',
  // border: '1px solid #BFBFBF',
  boxShadow: '5px 5px 10px  #aaaaaa'
};

const Lists = props => {
  const ren = props.result.map(el => <Results key={el.id} {...el} />);
  return (
    <div style={lists}>
      <div>{ren}</div>
    </div>
  );
};

export default Lists;

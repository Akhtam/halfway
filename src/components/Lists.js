import React from 'react';
import Results from './Results';


const Lists = props => {
  const ren = props.result.map(el => <Results key={el.id} {...el} />);
  return (
    <div className="lists">
      <div>{ren}</div>
    </div>
  );
};

export default Lists;

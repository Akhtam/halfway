import React from 'react';
import Results from './Results';


const Lists = ({ result }) => {
  const ren = result.map(el => <Results key={el.id} {...el} />);
  return (
    <div className="lists">
      <div>{ren}</div>
    </div>
  );
};

export default Lists;

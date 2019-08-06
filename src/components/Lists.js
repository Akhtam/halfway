import React from 'react';
import Results from './Results';


const Lists = ({ result }) => {
  const res = result.map(el => <Results key={el.id} {...el} />);
  return (
    <div className="lists">
      <div>{res}</div>
    </div>
  );
};

export default Lists;

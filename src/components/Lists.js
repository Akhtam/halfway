import React, { Component } from 'react';
import Results from './Results';
const lists = {
  margin: '20px 20px',
  width: '50%',
  backgroundColor: 'white',
}


class Lists extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const ren = this.props.result.map(el => (
      <Results
        {...el}
      />
    ));
    return (
      <div style={lists}>
        {ren} 
      </div>
    )
  }
}


export default Lists

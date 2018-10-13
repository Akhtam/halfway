import React, { Component } from 'react';
import Results from './Results';
import unsplashPhotos from '../dbmock/dumm';
import axios from 'axios';

const lists = {
  margin: '20px 20px',
  width: '50%',
  backgroundColor: 'white'
};

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ''
    };
  }
  // componentDidMount() {
  // 	this.onLoad()
  // }

  onLoad = () => {
    axios
      .get('/')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const ren = unsplashPhotos.map((el) => <Results key={el.id} {...el} />);
    return <div style={lists}>{ren}</div>;
  }
}

export default Lists;

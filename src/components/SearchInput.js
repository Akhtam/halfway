import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import keys from '../config/keys';
import getMiddlePoint from '../helpers';

const btnStyle = {
  backgroundColor: '#479da0',
  color: 'white'
};

const url = 'https://maps.googleapis.com/maps/api/geocode/json';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputA: '',
      inputB: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const { inputA, inputB } = this.state;
  //   const key = keys.API_KEY;
  //   if (inputA.length > 5 && inputB.length > 5) {
  //     let m = await getMiddlePoint(url, key, inputA, inputB);
  //     const mid = m.calcMiddle;
  //     const locA = {
  //       geoLoc: m.geoLocationA,
  //       fullAddress: inputA
  //     };
  //     const locB = {
  //       geoLoc: m.geoLocationB,
  //       fullAddress: inputB
  //     };
  //     this.props.getResults(mid, locA, locB);
  //     this.setState({ inputA: '', inputB: '' });
  //   } else {
  //     alert('please enter Address');
  //   }
  // };

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <input     
              value={this.state.inputA}
              placeholder="Location A"
              name='inputA'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input     
              value={this.state.inputB}
              placeholder="Location B"
              name='inputB'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit" style={btnStyle} onClick={this.handleSubmit}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchInput;

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import keys from '../config/keys';
import getMiddlePoint from '../helpers'

const btnStyle = {
  backgroundColor: '#9400D3',
  color: 'white'
};
const url = 'https://maps.googleapis.com/maps/api/geocode/json'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputA: '',
      inputB: ''
    };
  }

  handleChangeA = e => {
    this.setState(
      {
        inputA: e.target.value
      },
      () => console.log(this.state.inputA)
    );
  };

  handleChangeB = e => {
    this.setState(
      {
        inputB: e.target.value
      },
      () => console.log(this.state.inputB)
    );
  };

   handleSubmit = async(e) => {
    e.preventDefault();
    const locA = this.state.inputA;
    const locB = this.state.inputB;
    const key = keys.API_KEY;
    let m  = await getMiddlePoint(url, key, locA, locB);
    console.log(m)
  };

  render() {
    return (
      <div>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input
              placeholder="Location A"
              onChange={this.handleChangeA}
            />
            <Form.Input
              placeholder="Location B"
              onChange={this.handleChangeB}
            />
          </Form.Group>
          <Button type="submit" style={btnStyle} onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchInput;

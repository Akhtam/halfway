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

  handleChangeA = e => {
    this.setState({
      inputA: e.target.value
    });
  };

  handleChangeB = e => {
    this.setState({
      inputB: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { inputA, inputB} = this.state;
    const key = keys.API_KEY;
    if (inputA.length > 5 && inputB.length > 5) {
      let m = await getMiddlePoint(url, key, inputA, inputB);
      const mid = m.calcMiddle;
      const locA = {
        geoLoc : m.geoLocationA,
        fizAddress: inputA
      };
      const locB = {
        geoLoc : m.geoLocationB,
        fizAddress: inputB
      }
      console.log(m, locA, locB)
      this.props.getResults(mid, locA, locB)
      this.setState({ inputA: '', inputB: '' });
    } else {
      alert('please enter Address');
    }
  };

  render() {
    return (
      <div>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input
              value={this.state.inputA}
              placeholder="Location A"
              onChange={this.handleChangeA}
            />
            <Form.Input
              value={this.state.inputB}
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

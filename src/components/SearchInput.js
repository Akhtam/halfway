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
    if(this.state.inputA.length > 5 && this.state.inputB.length > 5) {
      e.preventDefault();
      const locA = this.state.inputA;
      const locB = this.state.inputB;
      const key = keys.API_KEY;
      let m = await getMiddlePoint(url, key, locA, locB);
      console.log(m)
      this.props.getResults(m[0], m[1], m);
      this.props.getLocations(this.state.inputA, this.state.inputB);
      this.setState({inputA: '', inputB: ''});
    } else {
      alert('please')
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

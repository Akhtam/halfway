import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

import keys from '../config/keys';

const btnStyle = {
  backgroundColor: '#9400D3',
  color: 'white'
}

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputA: '',
      inputB: ''
    }
  }
  handleChangeA = (e) => {
    this.setState({
      inputA: e.target.value
    }, () => console.log(this.state.inputA));
  }
  handleChangeB = (e) => {
    this.setState({
      inputB: e.target.value
    }, () => console.log(this.state.inputB));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const locA = this.state.inputA;
    const locB = this.state.inputB;
    const key = keys.API_KEY;

  }

  render() {
    return (
      <div>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input placeholder='Location A' onChange={this.handleChangeA}/>
            <Form.Input placeholder='Location B' onChange={this.handleChangeB}/>
          </Form.Group>
          <Button type='submit' style={btnStyle} onClick={this.handleSubmit}>Submit</Button> 
        </Form>
      </div>
    )
  }
}

export default SearchInput;

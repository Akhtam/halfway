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
      inoputA: '',
      inputB: ''
    }
  }
  handleChane = (e) => {
    const a = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${keys.API_KEY}&input=${e.target.value}`;
    fetch(a)
      .then(data => data.json())
      .then(el => console.log(el));
  }

  render() {
    return (
      <div>
        <Form unstackable>
          <Form.Group widths={2}>
            <Form.Input placeholder='Location A' />
            <Form.Input placeholder='Location B' onChange={this.handleChane}/>
          </Form.Group>
          <Button type='submit' style={btnStyle}>Submit</Button>
          
        </Form>
      </div>
    )
  }
}

export default SearchInput;

import React, { Component } from 'react';
import Results from './Results';
import unsplashPhotos from '../dbmock/dumm'
import { Header, Segment } from 'semantic-ui-react';
import SearchInput from './SearchInput';

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
    const ren = unsplashPhotos.map(el => (
      <Results
        {...el}
      />
    ));
    return (
      <div>
        <div className="container">
          <Segment textAlign='center'>
            <Header textAlign='center'>
              <h1><span className="logo">co</span>Location</h1>
              <Header.Subheader>
                <h3 className="subheader logo"> Fair & convinient Location</h3>
              </Header.Subheader>
            </Header>
            <div className='search-input'>
              <SearchInput />
            </div>
          </Segment>
        </div>
        <div style={lists}>
        {ren} 
        </div>
      </div>
    )
  }
}


export default Lists

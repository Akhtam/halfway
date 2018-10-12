import React, { Component } from 'react';
import './App.css';
import { Header, Segment } from 'semantic-ui-react';
import SearchInput from './components/SearchInput';

import Lists from './components/Lists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Segment textAlign="center">
            <Header textAlign="center">
              <h1>
                <span className="logo">co</span>
                Location
              </h1>
              <Header.Subheader>
                <h3 className="subheader logo"> Fair & convinient Location</h3>
              </Header.Subheader>
            </Header>
            <div className="search-input">
              <SearchInput />
            </div>
          </Segment>
        </div>
        <Lists />
      </div>
    );
  }
}

export default App;

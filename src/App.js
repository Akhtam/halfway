import React, { Component } from 'react';
import './App.css';
import { Header, Segment } from 'semantic-ui-react';
import SearchInput from './components/SearchInput';
import axios from 'axios';
import dummyData from './dbmock/dumm';
import IMAGE from './paula.jpg';
import Lists from './components/Lists';
import ShowMap from './components/ShowMap';

const backImg = {
  backgroundImage: `url(${IMAGE})`,
  backgroundRepeat: 'no-repeat center center fixed',
  backgroundSize: 'cover'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: dummyData,
      middle: [],
      locationA: '',
      locationB: '',
      showLocation: false
    };
  }

  getResults = async (middle, locationA, locationB) => {
    const response = await axios.get('/ten', {
      params: {
        lat: middle[0],
        lng: middle[1]
      }
    });

    if (response.status !== 200) {
      throw Error(response.message);
    }
    const results = await response.data.businesses;

    this.setState({
      results,
      middle,
      locationA,
      locationB,
      showLocation: true
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Segment textAlign="center" style={backImg}>
            <Header textAlign="center">
              <h1>
                Half
                <span className="logo">way</span>
              </h1>
              <Header.Subheader>
                <h3 className="subheader logo"> Fair & convinient Location</h3>
              </Header.Subheader>
            </Header>
            <div className="search-input">
              <SearchInput
                getResults={this.getResults}
                getLocations={this.getAddress}
              />
            </div>
          </Segment>
        </div>

        <div>
          {this.state.showLocation ? (
            <Header as="h4" block color="grey">
              Results between{' '}
              <span className="location">{this.state.locationA}</span> and{' '}
              <span className="location">{this.state.locationB}</span>
            </Header>
          ) : null}
        </div>

        <div>
          <ShowMap mid={this.state.middle} />
        </div>

        <div>
          <Lists result={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from '../config/keys';
import Mock from './Mock'

const mapStyle = { 
  height: '50vh',
  width: '35%',
  margin:'30px',
  border: '1px solid teal',
  position: 'absolute',
  left: '58%'
 }


 
class ShowMap extends Component {
 
  static defaultProps = {
    center: {
      lat: 37.7759,
      lng: -122.4245
    },
    zoom: 13
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={mapStyle}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Mock />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ShowMap

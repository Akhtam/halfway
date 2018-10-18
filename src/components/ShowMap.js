import React, { Component } from 'react';
import { Map, Polyline, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapContainer = {
  position: 'absolute',
  left: '53%',
  top: '30px',
  width: '42%',
  height: '450px'
};
class MapContainer extends Component {
  render() {
    const middle = {
      lat: this.props.midd[0] || 37.7749,
      lng: this.props.midd[1] || -122.4194
    };
    const firstLocation = {
      lat: this.props.firstLoc[0] || 37.7694,
      lng: this.props.firstLoc[1] || -122.4862
    };
    const secondLocation = {
      lat: this.props.secondLoc[0] || 37.7956,
      lng: this.props.secondLoc[1] || -122.3933
    };
    let points = [firstLocation, middle, secondLocation];
    let bounds = new this.props.google.maps.LatLngBounds();
    if (middle.lat !== undefined) {
      for (let i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    }
    var IconImage =
      'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Azure-icon.png';
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapContainer}
        bounds={bounds}
      >
        {middle.lat !== undefined ? (
          <Polyline
            path={points}
            geodesic="true"
            strokeColor="#1675ba"
            strokeOpacity={0.8}
            strokeWeight={2}
          />
        ) : null}

        <Marker
          name="Location A"
          position={firstLocation}
          icon={{ url: IconImage }}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          name="Middle Point"
          position={middle}
          icon={{
            url:
              'https://icons.iconarchive.com/icons/icons-land/vista-map-markers/48/Map-Marker-Ball-Pink-icon.png'
          }}
          animation={this.props.google.maps.Animation.DROP}
        />
        <Marker
          name="Location B"
          position={secondLocation}
          icon={{ url: IconImage }}
          animation={this.props.google.maps.Animation.DROP}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'GOOGLE_KEY'
})(MapContainer);

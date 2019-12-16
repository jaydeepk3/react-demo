import React, { Component } from 'react';
import Map from './Map';


const data = [
  {
    id: 1,
    latitude: "23.022505",
    longitude: "72.5713621"
  }
];

data[0].circle = {
  radius: 1000,
  options: {
    strokeColor: "#ff0000"
  }
};

class SimpleMap extends Component {
render() {
return(
<React.Fragment>
<Map
    center={{ lat: 23.022505, lng: 72.5713621 }}
    zoom={12}
    places={data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key="
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `800px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  </React.Fragment>
)
}
}
export default SimpleMap;
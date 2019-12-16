import React, { Component } from 'react';
import Map from './Map';


const data = [
  {
    id: 1,
    latitude: "29.957846",
    longitude: "77.554115"
  }
];

data[0].circle = {
  radius: 5000,
  options: {
    strokeColor: "#ff0000"
  }
};

class SimpleMap extends Component {
render() {
return(
<React.Fragment>
<Map
    center={{ lat: 29.957846, lng: 77.554115 }}
    zoom={12}
    places={data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyIS5fK7wlb2STCVHOZ4DhKxCZS7cTm20"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `800px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  </React.Fragment>
)
}
}
export default SimpleMap;
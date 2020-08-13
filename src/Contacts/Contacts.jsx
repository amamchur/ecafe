import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Contacts() {
  const defaultProps = {
    center: {
      lat: 49.8392489,
      lng: 24.0094137
    },
    zoom: 16
  };

  return (<div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyDc-AYScDvqbOdcS9eTM7UJTfsIqK1fHs0' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    </GoogleMapReact>
  </div>);
}

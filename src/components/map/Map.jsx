import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from "../map/LocationPin"
const Map = ({ location, zoomLevel }) => (
    <div className="map">
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCJWmbfopPwdTpskyUxvqtDXdAqZoGd0lo' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
)
export default Map;
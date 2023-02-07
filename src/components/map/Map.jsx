import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from "../map/LocationPin"

  

const Map = ({ location, zoomLevel }) => {

  const [apiKey, setApiKey] = useState("")
  useEffect(() => {
    fetch(`http://api.openlocationmap.org/data/2.5/location?APPID=${process.env.REACT_APP_APIKEY}`).then((result) => {
      if (result.ok) {
        result.json ((jasonResult)=> setApiKey(jasonResult.appId))
      }
    }
    )
  }) 
  (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey
          }}
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
}
export default Map
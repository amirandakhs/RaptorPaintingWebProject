import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
  const mapRef = useRef(null);
  const google = window.google;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -31.857093637082734, lng: 115.89644365231285 },
        zoom: 14,
      });

      const marker = new google.maps.Marker({
        position: { lat: -31.857093637082734, lng: 115.89644365231285 },
        map: map,
        title: "San Francisco",
      });
    });
  }, []);

  return <div ref={mapRef} style={{ height: "200px", width: "200px" }} />;
}

export default Map;

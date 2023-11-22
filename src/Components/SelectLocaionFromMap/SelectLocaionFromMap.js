import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
const MapComponent = ({ crrently, setCurrently }) => {
  // Api Key
  const YOUR_API_KEY = "AIzaSyAAOcn3r6DVavhuoPatQvNGg5kUuV1zAFo";
  // Api Key
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: YOUR_API_KEY,
  });
  // style
  const mapStyles = {
    height: "100%",
    width: "100%",
  };
  // Default Center
  const defaultCenter = {
    lat: 23.616151837565937,
    lng: 44.869853511853336,
  };
  // Current
  const onMapClickCurrent = (e) => {
    setCurrently({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={8}
          center={crrently.lat > 0 ? crrently : defaultCenter}
          onClick={onMapClickCurrent}
        >
          <MarkerF position={crrently} />
        </GoogleMap>
      ) : null}
    </>
  );
};

export default MapComponent;

import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
const MapComponent = ({
  zoom,
  crrently,
  onClickType,
  setCurrently,
  interfaceLocation,
  setInterfaceLocation,
}) => {
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
  // Interface
  const onMapClickInterface = (e) => {
    setInterfaceLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={zoom}
          center={defaultCenter}
          onClick={
            onClickType === "current"
              ? onMapClickCurrent
              : onClickType === "interface"
              ? onMapClickInterface
              : null
          }
        >
          {crrently.lat > 0 && <MarkerF position={crrently} />}
          {interfaceLocation.lat > 0 && (
            <MarkerF position={interfaceLocation} />
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
};

export default MapComponent;

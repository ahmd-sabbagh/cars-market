import React from "react";
import { MdClose } from "react-icons/md";
import EmptyPopup from "../EmptyPopup/EmptyPopup";
import MapComponent from "../SelectLocaionFromMap/SelectLocaionFromMap";
import "./SelectLocationFromMap.css";

function SelectLocationFromMap({ setViewMap, mapLocation = {} }) {
  return (
    <EmptyPopup>
      <div
        className="map-component position-relative"
        style={{ width: "300px", height: "400px" }}
      >
        <span
          className="map-close bg-white flex-c box-sh pointer"
          onClick={() => {
            setViewMap(false);
          }}
        >
          <MdClose />
        </span>
        <MapComponent {...mapLocation} />
      </div>
    </EmptyPopup>
  );
}

export default SelectLocationFromMap;

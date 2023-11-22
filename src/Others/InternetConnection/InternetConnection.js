import React from "react";
import { Detector } from "react-detect-offline";
import Window from "./LottieAnime/Window";

function InternetConnection({ children }) {
  return (
    <>
      <Detector render={({ online }) => (online ? children : <Window />)} />
    </>
  );
}

export default InternetConnection;

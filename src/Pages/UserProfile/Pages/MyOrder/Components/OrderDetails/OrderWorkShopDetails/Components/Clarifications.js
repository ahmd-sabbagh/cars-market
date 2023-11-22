import React from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";

function Clarifications({ Details }) {
  return (
    <div className="Clarifications mt-32">
      <h4 className="fs-20-600">{trans("flanties.hents")}</h4>
      <div className="cont d-flex flex-column gap-4 mt-3">
        <p>{Details.note}</p>
        {Details?.image && (
          <div
            className="image bg-image full-width"
            style={{
              backgroundImage: `url(${Details?.image})`,
              height: "300px",
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Clarifications;

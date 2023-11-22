import React, { useState } from "react";
import './SideBarWindow.css'
import { BsFillFilterSquareFill } from "react-icons/bs";

function SideBarWindow({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`SideBarWindow bg-white filter-Setting ${!open && "filter-Setting-status"}`}>
      <div className="icon-container position-relative d-block d-lg-none">
        <div
          className="icon position-absolute flex-c pointer"
          onClick={() => {
            setOpen(!open);
          }}
          style={{ opacity: open ? "1" : "0.3" }}
        >
          <BsFillFilterSquareFill />
        </div>
      </div>
      {children}
    </div>
  );
}

export default SideBarWindow;

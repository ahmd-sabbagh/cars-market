import React from "react";
import { NavLink } from "react-router-dom";
function Links({ data = [] }) {
  return (
    <div className="Links py-4 mb-2 d-flex flex-column gap-2">
      {data.map((item, idx) => (
        <NavLink
          className={`d-flex align-items-center text-black px-3 ${({
            isActive,
          }) => isActive && " active"}`}
          style={{ gap: "14px" }}
          key={idx}
          to={item.to}
        >
          <span className="icon flex-c">{item.icon}</span>
          <span className="fs-16-600">{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Links;

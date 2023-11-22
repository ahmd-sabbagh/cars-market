import "./DotsMenu.css";
import { ReactComponent as Icon } from "./Assets/dots-vertical.svg";
import { useEffect, useState } from "react";
import { useRef } from "react";

function DotsMenu({ children }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();
  const windowRef = useRef();
  useEffect(() => {
    const menuUserHandler = (e) => {
      if (
        !buttonRef?.current?.contains(e.target) &&
        !windowRef?.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", menuUserHandler);
    return () => {
      document.removeEventListener("mousedown", menuUserHandler);
    };
  }, []);
  return (
    <div className="DotsMenu position-relative">
      <span
        className="icon pointer"
        onClick={() => {
          setOpen(!open);
        }}
        ref={buttonRef}
      >
        <Icon />
      </span>
      {open && (
        <div
          className="DotsMenu-menue position-absolute r-07 py-2 box-sh bg-white"
          ref={windowRef}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default DotsMenu;

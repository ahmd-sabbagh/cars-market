import { ReactComponent as Check } from "./Assets/check-circle.svg";
import "./CheckRight.css";

function CheckRight({ text, state, setState }) {
  return (
    <div
      className="CheckRight d-flex align-items-center gap-2 pointer"
      onClick={() => {
        setState(!state);
      }}
    >
      <div className={`icon ${state && "checked"}`}>
        <Check />
      </div>
      <div className="text fs-16-400 text-color">{text}</div>
    </div>
  );
}

export default CheckRight;

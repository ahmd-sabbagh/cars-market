import "./Popup.css"; 
import { ReactComponent as Close } from "./Assets/x.svg";

function Popup({ state, setState, children, width = "702px" }) {
  return (
    <div className="Popup flex-c px-3">
      <div className="window" style={{ width: width }}>
        <div className="popup-nav d-flex align-items-center justify-content-between text-white r-10">
          <span>{state.text}</span>
          <span
            className="pointer"
            onClick={() => {
              setState({ ...state, status: false });
            }}
          >
            <Close />
          </span>
        </div>
        <div className="cont">{children}</div>
      </div>
    </div>
  );
}

export default Popup;

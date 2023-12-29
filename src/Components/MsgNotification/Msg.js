import "./Msg.css";
import { ReactComponent as Mes } from "./Assets/Message.svg";
import { useState } from "react";
import ViewLess from "./Components/ViewLess";

function Msg() {
  const [view, setView] = useState(false);
  return (
    <div className="Msg-Notic position-fixed">
      <div className="windwo position-relative p-4 box-sh">
        <div className="circle"></div>
        <div className="image flex-c">
          <Mes />
        </div>
        {view ? "" : <ViewLess setView={setView} />}
      </div>
    </div>
  );
}

export default Msg;

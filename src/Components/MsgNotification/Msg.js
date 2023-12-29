import "./Msg.css";
import { ReactComponent as Mes } from "./Assets/Message.svg";
import { useState } from "react";
import ViewLess from "./Components/ViewLess";
import OpenMsg from "./Components/OpenMsg";

function Msg() {
  const [view, setView] = useState(false);
  return (
    <div className="Msg-Notic position-fixed">
      <div className="windwo position-relative p-3 box-sh">
        <div className="circle"></div>
        <div className="image flex-c">
          <Mes />
        </div>
        {view ? <OpenMsg /> : <ViewLess setView={setView} />}
      </div>
    </div>
  );
}

export default Msg;

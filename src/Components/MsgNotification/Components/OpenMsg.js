import { ReactComponent as Close } from "../Assets/close.svg";
import Footer from "./Footer";
import MsgText from "./MsgText";

function OpenMsg() {
  return (
    <div className="OpenMsg">
      <div className="close">
        <Close />
      </div>
      <h3 className="text-center mt-3">{"Ahmed Said"}</h3>
      <MsgText />
      <Footer />
    </div>
  );
}

export default OpenMsg;

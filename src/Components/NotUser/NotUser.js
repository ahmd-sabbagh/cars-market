import { LiaUserSlashSolid } from "react-icons/lia";
import { trans } from "../Navbar/Navbar";
function NotUser() {
  return (
    <div className="NotUser d-flex flex-column align-items-center justify-content-center full-height">
      <div className="color-main" style={{ fontSize: "50px" }}>
        <LiaUserSlashSolid />
      </div>
      <p className="fs-16-700">{trans("no_user_requset")}</p>
    </div>
  );
}

export default NotUser;

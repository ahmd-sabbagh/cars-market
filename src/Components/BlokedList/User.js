import { useNavigate } from "react-router-dom";
import { trans } from "../Navbar/Navbar";
import moment from "moment";
import "moment/locale/ar";
import { useRecoilState } from "recoil";
import { vendorMainLoader } from "../../Pages/Vendor/GlopalStateRecoil/AllData";
import { LoaderState } from "../../Recoil/All/Loader";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../Others/Error";

function User({ image, name, created_at, id, type, setData }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loader, setLoader] = useRecoilState(
    type === "vendor" ? vendorMainLoader : LoaderState
  );
  // Moment
  var timeago;
  if (localStorage.getItem("i18nextLng") === "ar") {
    timeago = moment(created_at).locale("ar").fromNow();
  } else {
    timeago = moment(created_at).locale("en").fromNow();
  }
  // Moment
  // UnBlock User
  const blockUser = () => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/public/block/remove`,
        { user_id: id },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setData(data.data);
        SuccsesComponent(data.message);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(false);
      });
  };
  // UnBlock User
  return (
    <div className="User d-flex justify-content-between flex-column flex-sm-row gap-3 bg-white box-sh r-05 p-2 p-md-3">
      <div className="info d-flex align-items-center gap-3">
        <div
          className="image bg-image overflow-hidden "
          style={{
            backgroundImage: `url(${image})`,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
          }}
        ></div>
        <div className="text">
          <h3 className="fs-16-500">{name}</h3>
          <span className="fs-14-400 text-color mt-1">{timeago}</span>
        </div>
      </div>
      <button
        className="btn-blue fit-height mx-auto mx-sm-0 p-2 p-sm-3"
        onClick={() => {
          blockUser();
        }}
      >
        {trans("blocked_list.button")}
      </button>
    </div>
  );
}

export default User;

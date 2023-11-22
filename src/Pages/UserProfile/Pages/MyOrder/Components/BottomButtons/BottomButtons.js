import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../../../../../Recoil/All/Loader";
import { refreshDataForOrderSpareDetails } from "../OrderDetails/OrderSpareDetails/GlopalStateRecoil/AllData";
import { DeleteSparePartFun } from "../OrderDetails/OrderSpareDetails/DeleteSparePartFun";

function BottomButtons({ Id }) {
  const navigate = useNavigate();
  const [loader, setLoder] = useRecoilState(LoaderState);
  const [refresh, setRefresh] = useRecoilState(refreshDataForOrderSpareDetails);
  return (
    <div className="BottomButtons mt-5">
      <div className="row g-4">
        <div className="col-12 col-md-8">
          <div>
            <Link
              to={"/my-profile/requestes-message"}
              className="btn-blue d-block full-width"
            >
              {trans("buttons.all_request")}
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <button
            type="button"
            className="btn-green full-width"
            onClick={() => {
              DeleteSparePartFun(
                "/buyer/orders/cancel/",
                Id,
                setLoder,
                navigate,
                refresh,
                setRefresh,
                "cancel"
              );
              setLoder(true);
            }}
          >
            {trans("buttons.refuce_order")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomButtons;

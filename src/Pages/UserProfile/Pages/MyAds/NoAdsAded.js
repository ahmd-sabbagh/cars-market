import { Link } from "react-router-dom";
import { trans } from "../../../../Components/Navbar/Navbar";

function NoAdsAded() {
  return (
    <div
      className="NoCars d-flex flex-column justify-content-center align-items-center gap-4"
      style={{ height: "350px" }}
    >
      <h4 className="fs-20-600 text-center">
        {trans("cars_market.body.no_ads")}
      </h4>
      <Link to="/add-ad" className="btn-blue">
        {trans("add_ads_car.route_nav.add_ad")}
      </Link>
    </div>
  );
}

export default NoAdsAded;

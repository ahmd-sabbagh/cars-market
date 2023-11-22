import { trans } from "../../../../Components/Navbar/Navbar";
import Ad from "../../../CarsMarket/Components/Body/MainAds/Ad";
import "./OtherAds.css";
const data = [
  {
    owner: {
      name: "أحمد عادل",
    },
    title: "مرسيدس بينز 2022 شبه جديد للبيع ",
    created_at: "2023-09-07T13:23:49.000000Z",
    city: "كانيلو",
    image_main:
      "https://carz.codeella.com/uploads/shop/ads/c1Jpq4HZCHugFzRfpN1B1694093029.png",
    comments: 3,
  },
  {
    owner: {
      name: "أحمد عادل",
    },
    title: "مرسيدس بينز 2022 شبه جديد للبيع ",
    created_at: "2023-09-07T13:23:49.000000Z",
    city: "كانيلو",
    image_main:
      "https://carz.codeella.com/uploads/shop/ads/c1Jpq4HZCHugFzRfpN1B1694093029.png",
    comments: 15,
  },
];
function OtherAds() {
  return (
    <div className="OtherAds mt-5">
      <h3 className="fs-20-600 mb-4">{trans("vendor_details.vendor_ads")}</h3>
      <div className="all-ads d-flex flex-column gap-3">
        {data.map((item, idx) => (
          <Ad {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default OtherAds;

import { trans } from "../../../../../../Navbar/Navbar";

function Spare({ name, offer_part }) {
  return (
    <div className="Spare d-flex justify-content-between p-2 r-07 mx-auto">
      <div className="text d-flex flex-column gap-1">
        <span className="fs-14-700">{name}</span>
        <span className="fs-14-400">
          <span className="text-color">{trans("order_details.industry")}</span>
          <span>{offer_part.industry}</span>
        </span>
      </div>
      <span className="price fs-14-700">{offer_part.price}</span>
    </div>
  );
}

export default Spare;

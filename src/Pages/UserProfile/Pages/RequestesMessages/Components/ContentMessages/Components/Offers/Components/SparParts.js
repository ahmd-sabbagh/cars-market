import { useRecoilValue } from "recoil";
import { trans } from "../../../../../../../../../Components/Navbar/Navbar";
import { choseSparePartsArray } from "../../../../../GlopalStateRecoil/AllData";

function SparParts({ handleCheckSpare, id, name, offer_part }) {
  // Check Parts Array State Contain This Id
  const partsArray = useRecoilValue(choseSparePartsArray);
  // Check Parts Array State Contain This Id
  return (
    <label className="pointer SparParts mx-auto">
      <input
        className="d-none"
        value={offer_part.id}
        type="checkbox"
        checked={partsArray.includes(String(offer_part.id))}
        onChange={handleCheckSpare}
      />
      <div className="spare py-2 px-3 r-07 d-flex  justify-content-between border">
        <div className="text">
          <span className="title fs-14-400">{name}</span>
          <div className="made fs-14-400">
            <span className="text-color">
              {trans("order_details.industry")}
            </span>
            <span>{offer_part.industry}</span>
          </div>
        </div>
        <div className="price fs-14-700">{`${offer_part.price} SAR`}</div>
      </div>
    </label>
  );
}

export default SparParts;

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { newCars } from "../../../../Recoil/AddCars/AddServesCars";
import PopupSelectTypeServes from "../../../../Components/PopupSelectTypeServes/PopupSelectTypeServes";
import { useState } from "react";

function Header({
  disc,
  title,
  button,
  to = "",
  buttonStatus = [],
  buttonOrLink = "link",
}) {
  const [addCar, setAddCar] = useRecoilState(newCars);
  const [selectType, setSelectType] = useState(false);
  return (
    <>
      {selectType && <PopupSelectTypeServes setSelectType={setSelectType} />}
      <div className="Header d-flex justify-content-between flex-column flex-md-row gap-4">
        <div className="text">
          <h3 className="fs-24-600">{title}</h3>
          <p className="fs-16-500 mt-2 text-color">{disc}</p>
        </div>
        {buttonStatus >= 1 &&
          (buttonOrLink === "link" ? (
            <div
              className="btn-blue fit-height d-block pointer"
              onClick={() => {
                setSelectType(true);
              }}
            >
              {button}
            </div>
          ) : buttonOrLink === "ads" ? (
            <Link
              to={to}
              className="btn-blue fit-height d-block pointer"
              onClick={() => {
                setSelectType(true);
              }}
            >
              {button}
            </Link>
          ) : (
            <div
              className="btn-blue fit-height d-block pointer"
              onClick={() => {
                setAddCar(!addCar);
              }}
            >
              {button}
            </div>
          ))}
      </div>
    </>
  );
}

export default Header;

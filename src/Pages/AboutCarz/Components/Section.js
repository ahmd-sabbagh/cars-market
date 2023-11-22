import React from "react";
import { useRecoilState } from "recoil";
import {
  addDefaultCar,
  typeServes,
} from "../../../Recoil/AddCars/AddServesCars";

function Section({
  dir = false,
  image,
  title,
  descripion,
  button,
  type,
  setValueSelect,
}) {
  const [typeServeses, setTypeServes] = useRecoilState(typeServes);
  const [defaultCar, setDefaultCar] = useRecoilState(addDefaultCar);

  return (
    <div className="SectionAboutCarz">
      <div
        className={`row g-4 g-lg-5 align-items-center ${
          dir && "flex-row-reverse"
        }`}
      >
        <div className="col-12 col-lg-6">
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="text d-flex flex-column gap-4">
            <h4 className="fs-32-700">{title}</h4>
            <p>{descripion}</p>
            <button
              className="mt-3 flex-c mx-auto mx-lg-0"
              onClick={() => {
                setDefaultCar(true);
                setTypeServes(type);
                setValueSelect("");
              }}
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

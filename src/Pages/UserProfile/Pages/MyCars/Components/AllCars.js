import React, { useEffect, useState } from "react";
import { trans } from "../../../../../Components/Navbar/Navbar";
import CardCar from "./CardCar";
import NoCars from "./NoCars";
import { getCarFunction } from "./GetCarsFun";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../Components/Loader/Loader";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  getCarsForProfileUser,
  refreshDataGetCars,
} from "../GlopalStateRecoil/AllData";

function AllCars() {
  const navigate = useNavigate();
  const [carsOption, setCarsOption] = useRecoilState(getCarsForProfileUser);
  const [exist, setExist] = useState(true);
  const [loader, setLoader] = useState(true);
  // Get Cars
  const newCarStatus = useRecoilValue(refreshDataGetCars);
  useEffect(() => {
    getCarFunction(setCarsOption, setExist, setLoader, navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCarStatus, carsOption]);
  // Get Cars
  return (
    <div className="AllCars bg-white mt-32 p-2 p-md-4 r-05">
      <h3 className="fs-20-600">{`${trans("my_cars.all_car")} (${
        carsOption?.length
      })`}</h3>
      <div className="mt-4 d-flex flex-column gap-4">
        {loader ? (
          <div className="flex-c" style={{ height: "300px" }}>
            <Loader width="150px" />
          </div>
        ) : exist ? (
          <>
            {carsOption.map((item) => (
              <CardCar card={item} key={item.id} />
            ))}
          </>
        ) : (
          <NoCars />
        )}
      </div>
    </div>
  );
}

export default AllCars;

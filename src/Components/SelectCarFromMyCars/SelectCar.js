import React, { useEffect, useState } from "react";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../Others/Error";
import DropdownsSingle from "../../Components/DropdownsSingle/DropdownsSingle";

function SelectCar({setActive}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Get Car Function
  const [loader, setLoader] = useState(true);
  const [carsOption, setCarsOption] = useState();
  const getCarFun = () => {
    axios
      .get(`${basedDomin}/buyer/cars`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCarsOption(data.data);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  useEffect(() => {
    getCarFun();
  }, []);
  // Get Car Function
  return (
    <>
      <DropdownsSingle
        setActive={setActive}
        carsOption={carsOption}
        loader={loader}
      />
    </>
  );
}

export default SelectCar;

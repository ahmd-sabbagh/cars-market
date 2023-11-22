import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../Others/Error";

// Get Car Function
export const getCarFunction = (
  setCarsOption,
  setExist,
  setLoader,
  navigate,
) => {
  const token = localStorage.getItem("token");
  axios
    .get(`${basedDomin}/buyer/cars`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setCarsOption(data.data);
      if (data.data.length === 0) {
        setExist(false);
      }
      setLoader(false);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
    });
};
// Get Car Function

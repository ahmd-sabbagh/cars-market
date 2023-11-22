import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../Others/Error";

// Get Car Function
export const GetOrdersProcessing = (
  route,
  setAllData,
  setExist,
  setLoader,
  navigate,
  typeServes
) => {
  const token = localStorage.getItem("token");
  setLoader(true);
  axios
    .get(`${basedDomin}${route}${typeServes}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setAllData(data.data);
      if (data.data.orders.data.length === 0) {
        setExist(false);
      } else {
        setExist(true);
      }
      setLoader(false);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
      setLoader(false);
    });
};
// Get Car Function

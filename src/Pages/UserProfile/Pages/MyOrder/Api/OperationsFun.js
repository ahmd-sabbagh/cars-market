import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent, SuccsesComponent } from "../../../../../Others/Error";

// Get Car Function
export const OperationsFun = (
  route,
  id,
  setLoader,
  status,
  navigate,
  setType
) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      `${basedDomin}${route}${id}`,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      setLoader(false);
      setType(`${status}-${id}`);
      SuccsesComponent(data.message);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
      setLoader(false);
    });
};
// Get Car Function

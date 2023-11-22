import axios from "axios";
import { basedDomin } from "../../../../../../../Api/basedDomin";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../../Others/Error";

// Get Car Function
export const DeleteSparePartFun = (
  route,
  id,
  setLoader,
  navigate,
  refresh,
  setRefresh,
  type = "delete"
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
      SuccsesComponent(data.message);
      setLoader(false);
      setRefresh(!refresh);
      if (type === "cancel") {
        navigate("/my-profile/my-order");
      }
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
      setLoader(false);
    });
};
// Get Car Function

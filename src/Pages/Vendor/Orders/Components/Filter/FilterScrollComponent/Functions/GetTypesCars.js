import axios from "axios";
import { basedDomin } from "../../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../../Others/Error";


// function get type cars
export const getTypeCars = (id, setState, navigate) => {
  axios
    .get(`${basedDomin}/public/data/types-car/${id}`, {
      headers: {
        Accept: "application/json",
      },
    })
    .then(({ data }) => {
      setState(data.data);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
    });
};
// function get type cars

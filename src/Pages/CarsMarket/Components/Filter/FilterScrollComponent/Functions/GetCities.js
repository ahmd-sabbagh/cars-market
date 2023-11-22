import axios from "axios";
import { apiHeaders, basedDomin } from "../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../Others/Error";

export function GetCities(id, setState, navigate) {
  axios
    .get(`${basedDomin}/public/data/cities/${id}`, apiHeaders)
    .then(({ data }) => {
      setState(data.data);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
    });
}

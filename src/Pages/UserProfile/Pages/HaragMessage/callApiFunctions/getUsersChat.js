import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../Others/Error";

export function getUsersChat(setUsers, setLoader, navigate) {
  const token = localStorage.getItem("token");
  axios
    .get(`${basedDomin}/shop/chat/ads/users-chat`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      setUsers(data.data.data);
      setLoader(false);
    })
    .catch((error) => {
      ErrorComponent(error, navigate);
      setLoader(false);
    });
}

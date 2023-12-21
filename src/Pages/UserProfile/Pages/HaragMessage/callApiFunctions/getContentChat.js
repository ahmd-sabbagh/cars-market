import axios from "axios";
import { basedDomin } from "../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../Others/Error";

export function getContentChat(Rout, setMessage, message,setContentMessage, setLoader, navigate) {
  const token = localStorage.getItem("token");
  setLoader(true);
  console.log(Rout);
  axios
    .get(`${basedDomin}${Rout}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      setMessage({
        ...message,
        head: data.data.user_chat,
        contentMessage: data.data.chat,
        textMessage: data.data.chat.messages.data,
      });
      setContentMessage(data.data.chat.messages.data)
      setLoader(false);
    })
    .catch((error) => {
      if (error.response.status === 404) {
        setLoader(false);
      } else {
        ErrorComponent(error, navigate);
      }
    });
}

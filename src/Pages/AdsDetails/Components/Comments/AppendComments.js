import { useNavigate, useParams } from "react-router-dom";
import { trans } from "../../../../Components/Navbar/Navbar";
import { ReactComponent as Send } from "./Assets/paper-airplane.svg";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useState } from "react";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";
import { useRecoilState } from "recoil";
import { commentsData } from "../GlopalStateRecoil/AllData";
import Loader from "../../../../Components/Loader/Loader";
import { useRef } from "react";

function AppendComments() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const prams = useParams();
  const ref = useRef();
  const [Data, setComments] = useRecoilState(commentsData);
  const [loader, setLoader] = useState(false);
  // State
  const [text, setText] = useState("");
  // Func Submit
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/shop/ads/comment/${prams.Id}`,
        { comment: text },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments(data.data);
      SuccsesComponent(data.message);
      setLoader(false);
      ref.current.value = "";
    } catch (error) {
      setLoader(false);
      ErrorComponent(error, navigate);
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="write-comment p-3 d-flex justify-content-between align-items-center">
        <input
          ref={ref}
          type="text"
          placeholder={trans("ads_details.write_comment")}
          className="border-0 bg-transparent full-width px-3"
          defaultValue={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          disabled={loader}
          type="submit"
          className="border-0 bg-transparent"
        >
          {loader ? <Loader width={"30px"} /> : <Send />}
        </button>
      </div>
    </form>
  );
}

export default AppendComments;

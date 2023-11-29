import { useNavigate } from "react-router-dom";
import { trans } from "../Navbar/Navbar";
import User from "./User";
import axios from "axios";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent } from "../../Others/Error";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import NotUserAnmi from "./NotUserAnmi";

function BlokedList({ type }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Get User Blocked List
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const getUserList = () => {
    setLoader(true);
    axios
      .get(`${basedDomin}/public/block/list`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setData(data.data);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(false);
      });
  };
  // Get User Blocked List
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div
      className="BlokedList p-3 p-md-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="fs-24-600">{trans("blocked_list.title")}</h3>
      {loader ? (
        <div className="flex-c r-07 mt-5" style={{ height: "300px" }}>
          <Loader width={"150px"} />
        </div>
      ) : (
        <div className="cont mt-5 d-flex flex-column gap-3 gap-md-4">
          {data.length > 0 ? (
            data.map((item) => (
              <User setData={setData} type={type} {...item} key={item.id} />
            ))
          ) : (
            <NotUserAnmi width="300px" />
          )}
        </div>
      )}
    </div>
  );
}

export default BlokedList;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PublicInfo.css";
import { useEffect } from "react";
import { basedDomin } from "../../Api/basedDomin";
import { ErrorComponent } from "../../Others/Error";
import { trans } from "../../Components/Navbar/Navbar";
function PublicInfo({ type }) {
  const navigat = useNavigate();
  const [data, setData] = useState({});
  const getData = () => {
    axios
      .get(`${basedDomin}/public/data/abouts`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigat);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="PublicInfo pb-5">
      <div className="container">
        <div className="d-flex flex-column gap-4 mt-5">
          <h3 className="fs-24-500 text-center">
            {type === "about"
              ? "عن الموقع"
              : type === "policy"
              ? trans("footer.links.uses")
              : "الشروط والاحكام"}
          </h3>
          {type === "about" ? (
            <p
              dangerouslySetInnerHTML={{
                __html: data?.about_us?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
              }}
            ></p>
          ) : type === "policy" ? (
            <p
              dangerouslySetInnerHTML={{
                __html: data?.policy?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
              }}
            ></p>
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html: data?.terms?.replace(/(?:\r\n|\r|\n)/g, "<br />"),
              }}
            ></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PublicInfo;

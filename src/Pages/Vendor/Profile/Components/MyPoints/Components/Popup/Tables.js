import axios from "axios";
import { useNavigate } from "react-router-dom";
import { basedDomin } from "../../../../../../../Api/basedDomin";
import { ErrorComponent } from "../../../../../../../Others/Error";
import { useEffect, useState } from "react";
import Loader from "../../../../../../../Components/Loader/Loader";
import { trans } from "../../../../../../../Components/Navbar/Navbar";

function Tables() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Main State
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  // Main State
  // Get Points
  const getPoints = () => {
    axios
      .get(`${basedDomin}/vendor/plans/points-values`, {
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
      });
  };
  // Use
  useEffect(() => {
    getPoints();
  }, []);
  return (
    <table className="table table-bordered">
      <tbody>
        {loader ? (
          <div className="flex-c bg-white r-07" style={{ height: "300px" }}>
            <Loader width={"150px"} />
          </div>
        ) : (
          data.map((item, idx) => (
            <tr className="d-flex" key={idx}>
              <td className="full-width py-3">{item.title}</td>
              <td className="full-width py-3">{`${item.points} ${trans(
                "vendor.my_points.point"
              )}`}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Tables;

import React, { useEffect, useState } from "react";
import { trans } from "../../../../Components/Navbar/Navbar";
import { FiChevronDown } from "react-icons/fi";
import ScrollarComponent from "../../../../Components/ScrollarComponent/ScrollarComponent";
import axios from "axios";
import { basedDomin } from "../../../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import { ErrorComponent, SuccsesComponent } from "../../../../Others/Error";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../../../Recoil/All/Loader";
import {
  filterSavedData,
  haragMainData,
  marketExistStatus,
} from "./GlopalStateRecoil/AllData";
import { MdDeleteSweep } from "react-icons/md";

function SavedFliter() {
  const [loader, setLoader] = useRecoilState(LoaderState);
  const [exist, setExist] = useRecoilState(marketExistStatus);
  const [dataAds, setDataAds] = useRecoilState(haragMainData);
  const [open, setOpen] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [savedFilterData, setSavedFilterData] = useRecoilState(filterSavedData);
  // const [data, setData] = useState([]);
  // Get Saved Filter
  const getMyFilter = () => {
    axios
      .get(`${basedDomin}/shop/filters`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSavedFilterData(data.data);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  useEffect(() => {
    getMyFilter();
  }, []);
  // Function Delete Item
  const deleteFilter = (id) => {
    setLoader(true);
    axios
      .post(
        `${basedDomin}/shop/filters/delete/${id}`,
        { is_web: true },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setSavedFilterData(data.data);
        SuccsesComponent(data.message);
        setLoader(false);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
        setLoader(false);
      });
  };
  // Function Delete Item
  return (
    <>
      <div
        className="filter-controler d-flex justify-content-between align-items-center pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{trans("cars_market.filter.fav_filter")}</span>
        <span className={`transion-5 ${open && "icon-rotate"}`}>
          <FiChevronDown />
        </span>
      </div>
      <ScrollarComponent height={open ? "250px" : "0px"}>
        <div className="SavedFliter d-flex flex-column-reverse gap-3">
          {savedFilterData.map((item, idx) => (
            <div
              className="p-3 cont position-relative"
              key={idx}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              data-aos-offset="5"
            >
              <h5 className="mb-3">
                {item.brand
                  ? item.brand.label
                  : trans("cars_market.filter.no_name")}
              </h5>
              <p className="d-flex gap-1 align-items-center">
                <span>{trans("cars_market.filter.model")}</span>
                <span>
                  {item.models_years.length !== 0
                    ? `${
                        item.models_years.length > 1
                          ? `${item.models_years[0]}...`
                          : item.models_years[0]
                      }`
                    : trans("cars_market.filter.nothing")}
                </span>
              </p>
              {/* Delete Filter */}
              <div
                className="deleteFilter flex-c pointer"
                onClick={() => {
                  deleteFilter(item.id);
                }}
              >
                <MdDeleteSweep />
              </div>
              {/* Delete Filter */}
              <div className="bottom d-flex align-items-center justify-content-between">
                <p className="d-flex gap-1 align-items-center">
                  <span>{trans("cars_market.filter.place")}</span>
                  <span>
                    {item.country
                      ? item.country.label
                      : trans("cars_market.filter.nothing")}
                  </span>
                </p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setLoader(true);
                    try {
                      const { data } = await axios.post(
                        `${basedDomin}/shop/ads`,
                        { ...item, is_web: true },
                        {
                          headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      );
                      setDataAds(data.data.data);
                      setLoader(false);
                      if (data.data.data.length === 0) {
                        setExist(false);
                      } else {
                        setExist(true);
                      }
                    } catch (error) {
                      ErrorComponent(error, navigate);
                      setLoader(false);
                    }
                  }}
                >
                  <button
                    className="border-0 bg-green text-white flex-c"
                    type="submit"
                  >
                    {trans("cars_market.filter.confirm_filter")}
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </ScrollarComponent>
    </>
  );
}

export default SavedFliter;

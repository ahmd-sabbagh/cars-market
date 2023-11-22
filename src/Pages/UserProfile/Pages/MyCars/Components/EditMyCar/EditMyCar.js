import { useRecoilState, useRecoilValue } from "recoil";
import {
  brandsCarsFromApi,
  typesCarsFromApi,
} from "../../../../../../Recoil/All/GeneralData";
import { useEffect, useRef, useState } from "react";
import { trans } from "../../../../../../Components/Navbar/Navbar";
import axios from "axios";
import { basedDomin } from "../../../../../../Api/basedDomin";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../Others/Error";
import DropdownToAll from "../../../../../../Components/DropdownToAll/DropdownToAll";
import { refreshDataGetCars } from "../../GlopalStateRecoil/AllData";
import {
  doneAddCar,
  newCars,
} from "../../../../../../Recoil/AddCars/AddServesCars";
import { useNavigate } from "react-router-dom";
import GetYears from "../../../../../../Components/GetYears/GetYears";
import { ReactComponent as Car } from "./Assets/car.svg";
import { ReactComponent as Camera } from "./Assets/camera.svg";
import { ReactComponent as Hent } from "./Assets/hent.svg";
import Loader from "../../../../../../Components/Loader/Loader";
import { LoaderStateEdit } from "../../../../../../Recoil/All/Loader";

function EditMyCar({ setEditView, Id }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useRecoilState(newCars);
  const [loader, setLoader] = useState(false);
  const [loaderEdit, setLoaderEdit] = useRecoilState(LoaderStateEdit);
  // Validation State
  const [errorValidation, setErrorValidation] = useState({});
  // Validation State
  // Use Ref
  const tapRef = useRef();
  // Use Ref
  const [active, setActive] = useState(false);
  // Refresh Get Cars For User Profile Of My Cars Window
  const [refresh, setRefresh] = useRecoilState(refreshDataGetCars);
  // Get Genrate Years
  const [years, setYears] = useState([]);
  // Get Genrate Years
  // States Data
  const brandsCarOption = useRecoilValue(brandsCarsFromApi);
  const [typesCarOption, setTypesCarOption] = useRecoilState(typesCarsFromApi);
  const [companyCar, setCompanyCar] = useState();
  const [typesCar, setTypesCar] = useState();
  const [modelYears, setModelYears] = useState({ value: "", label: "" });
  const [structerNum, setStructerNum] = useState("");
  // selectionComponent
  const selectionComponent = [
    {
      setActive,
      carsOption: brandsCarOption,
      state: companyCar,
      setState: setCompanyCar,
      placeholder: trans("order_spare.chose_car"),
      setTypesCarOption,
      type: "company_car",
    },
    {
      setActive,
      carsOption: typesCarOption,
      state: typesCar,
      setState: setTypesCar,
      placeholder: trans("add_new_car.type_car_placeholder"),
    },
    {
      setActive,
      carsOption: years,
      state: modelYears,
      setState: setModelYears,
      placeholder: trans("add_new_car.year_car_lable"),
    },
  ];

  // Function On Submit
  const formData = {
    brands_car_id: companyCar?.value,
    structure_num: structerNum,
    model_year: modelYears?.value,
    types_car_id: typesCar?.value,
  };
  const onSubmit = async (e) => {
    setLoaderEdit(false);
    e.preventDefault();
    setActive(false);
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/cars/update/${Id}`,
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setEditView(false);
      setLoaderEdit(true);
      setRefresh(!refresh);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setActive(true);
      setLoaderEdit(true);
      setActive(false);
    }
  };
  // Function Get Cars Data
  const getCarsData = () => {
    axios
      .get(`${basedDomin}/buyer/cars/${Id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setCompanyCar(data.data.brand_car);
        setTypesCar(data.data.type_car);
        setModelYears({
          ...modelYears,
          value: data.data.model_year,
          label: data.data.model_year,
        });
        setStructerNum(data.data.structure_num);
        setLoader(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // Function Get Cars Data
  useEffect(() => {
    getCarsData();
    GetYears(setYears);
    const tapHandler = (e) => {
      if (!tapRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", tapHandler);
    return () => {
      document.removeEventListener("mousedown", tapHandler);
    };
  }, []);
  return (
    <>
      <div className="AddNewCar top-0 start-0 full-width flex-c">
        <div className="cont bg-white p-4 p-sm-5" ref={tapRef}>
          {/* Top */}
          <div className="top d-flex flex-column flex-lg-row align-items-center gap-4 gap-lg-5">
            <div className="text ">
              <h4 className="fs-24-700 text-phone">
                {trans("edit_car.title")}
              </h4>
              <p className="fs-16-400 mt-3 text-phone text-color">
                {trans("edit_car.desc")}
              </p>
            </div>
            <div className="shape d-sm-none d-lg-block">
              <Car />
            </div>
          </div>
          {/* Bottom */}
          <form onSubmit={onSubmit} className="bottom">
            {loader ? (
              <div
                className="d-flex flex-column gap-3 gap-lg-4"
                data-aos="fade-up"
                data-aos-duration={`1500`}
              >
                {/* Company Car */}
                <div className="d-flex flex-column gap-2">
                  <span className="span">
                    {trans("add_new_car.car_company_lable")}
                  </span>
                  <DropdownToAll {...selectionComponent[0]} />
                </div>
                {/* Row */}
                <div className=" d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-4">
                  {/* type car */}
                  <div className="d-flex flex-column gap-2 full-width">
                    <span className="span">
                      {trans("add_new_car.type_car_lable")}
                    </span>
                    <DropdownToAll {...selectionComponent[1]} />
                  </div>
                  {/* year car */}
                  <div className="d-flex flex-column gap-2 full-width">
                    <span className="span">
                      {trans("add_new_car.year_car_lable")}
                    </span>
                    <DropdownToAll {...selectionComponent[2]} />
                  </div>
                </div>
                {/* Number */}
                <div className="number d-flex align-items-end gap-3 gap-lg-4">
                  {/* number */}
                  <div className="d-flex flex-column gap-2 full-width">
                    <span className="span">{trans("add_new_car.number")}</span>
                    <input
                      type="text"
                      placeholder={trans("add_new_car.number_placeholder")}
                      className="border r-07 p-3"
                      defaultValue={structerNum}
                      onChange={(e) => {
                        setStructerNum(e.target.value);
                      }}
                    />
                  </div>
                  {/* photo */}
                  <div className="photo flex-c">
                    <Camera />
                  </div>
                </div>
                {/* Hent */}
                <div className="hent d-flex align-items-center gap-2">
                  <span>
                    <Hent />
                  </span>
                  <p>{trans("add_new_car.hent")}</p>
                </div>
              </div>
            ) : (
              <Loader />
            )}

            <div className="buttons d-flex gap-4 mt-3 mt-lg-4">
              <button
                type="submit"
                disabled={!active}
                className={`${!active && "disabled"} flex-grow-1`}
              >
                {trans("edit_car.button")}
              </button>
              <button
                className="fit-content"
                type="button"
                onClick={() => {
                  setEditView(false);
                }}
              >
                {trans("my_order.cancel")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditMyCar;

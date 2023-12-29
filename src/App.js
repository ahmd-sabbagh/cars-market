import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./ScrollToTopRouter/ScrollToTopRouter";
import { useEffect } from "react";
import axios from "axios";
import { basedDomin } from "./Api/basedDomin";
import { ErrorComponent } from "./Others/Error";
import { useRecoilState, useRecoilValue } from "recoil";
import { brandsCarsFromApi, repeatCountries } from "./Recoil/All/GeneralData";
import { LoaderState, LoaderStateEdit } from "./Recoil/All/Loader";
import MainLoader from "./Components/MainLoader/MainLoader";
import AOS from "aos";
import { generateYears } from "./Recoil/All/GenerateYears";
import GetYears from "./Components/GetYears/GetYears";
import Msg from "./Components/MsgNotification/Msg";
import { showNotificationMsg } from "./Components/MsgNotification/recoil/atoms";
import Pusher from "pusher-js";

function App() {
  const language = localStorage.getItem("i18nextLng");
  const userId = JSON.parse(localStorage.getItem("user"))?.id;
  const navigate = useNavigate();
  // get genral data
  // States Data
  const loader = useRecoilValue(LoaderState);
  const [loaderEdit, setLoaderEdit] = useRecoilState(LoaderStateEdit);
  const [years, setYears] = useRecoilState(generateYears);
  // States Data
  // Show Notification Msg
  const showNotificationmsg = useRecoilValue(showNotificationMsg);
  // Show Notification Msg
  const [countriesState, setCountriesState] = useRecoilState(repeatCountries);
  const [brandsCar, setBrandsCar] = useRecoilState(brandsCarsFromApi);
  const getGeneralData = () => {
    axios
      .get(`${basedDomin}/public/data/all`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(({ data }) => {
        setBrandsCar(data.data.brands_car);
        setCountriesState(data.data.countries);
        setLoaderEdit(true);
      })
      .catch((error) => {
        ErrorComponent(error, navigate);
      });
  };
  // get genral data

  useEffect(() => {
    GetYears(setYears);
    getGeneralData();
    AOS.init();
    // Notifications
    const pusher = new Pusher("e1a99b18f88e0adba1aa", {
      cluster: "eu",
    });
    const channel = pusher.subscribe(`user-data-${userId}`);
    channel.bind("notify", (notify) => {
      console.log(notify);
    });
    return () => {
      pusher.unsubscribe(`user-data-${userId}`);
    };
  }, []);
  return (
    <>
      {loader && <MainLoader />}
      {!loaderEdit && <MainLoader />}
      <div
        className="App position-relative"
        style={{ minHeight: "100vh" }}
        dir={language === "en" ? "ltr" : "rtl"}
      >
        <ScrollToTop />
        {showNotificationmsg && <Msg />}
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

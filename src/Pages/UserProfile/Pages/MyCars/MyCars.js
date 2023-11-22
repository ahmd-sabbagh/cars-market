import "./MyCars.css";
import AllCars from "./Components/AllCars";
import Header from "../Components/Header";
import { trans } from "../../../../Components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { newCars } from "../../../../Recoil/AddCars/AddServesCars";
import AddNewCar from "../../../../Components/AddNewCar/AddNewCar";
import { getCarsForProfileUser } from "./GlopalStateRecoil/AllData";

function MyCars() {
  const new_car = useRecoilValue(newCars);
  const carsLength = useRecoilValue(getCarsForProfileUser);
  const headers = {
    title: trans("my_cars.title"),
    disc: trans("my_cars.disc"),
    button: trans("my_cars.add_car"),
    buttonStatus: carsLength?.length,
    buttonOrLink: "button",
  };
  return (
    <>
      {new_car && <AddNewCar />}
      <div className="MyCars py-4 px-md-3">
        <Header {...headers} />
        <AllCars />
      </div>
    </>
  );
}

export default MyCars;

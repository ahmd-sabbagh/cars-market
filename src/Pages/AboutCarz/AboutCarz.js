import "./AboutCarz.css";
import { trans } from "../../Components/Navbar/Navbar";
import image1 from "./Assets/1.png";
import image2 from "./Assets/2.png";
import image3 from "./Assets/3.png";
import Section from "./Components/Section";
import SomeQuestion from "./SomeQuestion/SomeQuestion";
import AddCar from "../../Components/AddCar/AddCar";
import AddNewCar from "../../Components/AddNewCar/AddNewCar";
import { useRecoilState } from "recoil";
import {
  addDefaultCar,
  doneAddCar,
  newCars,
} from "../../Recoil/AddCars/AddServesCars";
import DoneAddNewCar from "../../Components/AddNewCar/DoneAddNewCar/DoneAddNewCar";
import { useEffect } from "react";
import { CarsTypeState } from "../../Recoil/All/CarsTypeState";

function AboutCarz() {
  const [newCar, setOpen] = useRecoilState(newCars);
  const [defaultCar, setDefaultCar] = useRecoilState(addDefaultCar);
  const [doneAdd, setDonaAdd] = useRecoilState(doneAddCar);
  const [valueSelect, setValueSelect] = useRecoilState(CarsTypeState);
  const data = [
    {
      dir: false,
      image: image1,
      title: trans("about_carz.section_title1"),
      descripion: trans("about_carz.desc1"),
      button: trans("about_carz.button"),
      type: "/order-spare",
    },
    {
      dir: true,
      image: image2,
      title: trans("about_carz.section_title2"),
      descripion: trans("about_carz.desc2"),
      button: trans("about_carz.button"),
      type: "/workshop",
    },
    {
      dir: false,
      image: image3,
      title: trans("about_carz.section_title3"),
      descripion: trans("about_carz.desc3"),
      button: trans("about_carz.button"),
      type: "/flatnies",
    },
  ];

  // useeffect
  useEffect(() => {
    setOpen(false);
    setDefaultCar(false);
    setDonaAdd(false);
  }, []);
  return (
    <>
      {doneAdd && <DoneAddNewCar />}
      {newCar && <AddNewCar />}
      {defaultCar && <AddCar />}
      <div className="AboutCarz py-5">
        <div className="container">
          <h3
            className="text-center mx-auto mt-4"
            data-aos="fade-down"
            data-aos-duration={`1000`}
            data-aos-offset="10"
          >
            {trans("about_carz.title")}
          </h3>
          {data.map((item, idx) => (
            <Section {...item} key={idx} setValueSelect={setValueSelect} />
          ))}
          <SomeQuestion />
        </div>
      </div>
    </>
  );
}

export default AboutCarz;

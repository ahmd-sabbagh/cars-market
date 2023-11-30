import { useState } from "react";
import DotsMenu from "../../../../../Components/DotsMenu/DotsMenu";
import { trans } from "../../../../../Components/Navbar/Navbar";
import image from "./Assets/2.png";
import EditMyCar from "./EditMyCar/EditMyCar";
function CardCar({ card }) {
  const [editView, setEditView] = useState(false);
  return (
    <>
      {editView && <EditMyCar Id={card.id} setEditView={setEditView} />}
      <div
        className="CardCar r-05 p-3 p-md-4 border box-sh"
        data-aos="fade-up"
        data-aos-duration={`1500`}
        data-aos-offset="50"
      >
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <div className="d-flex gap-3">
              {/* Logo */}
              <div
                className="logo bg-image"
                style={{ backgroundImage: `url(${card.brand_car.logo})` }}
              ></div>
              <div className="flex-grow-1 d-flex justify-content-between">
                {/* text */}
                <div className="text d-flex flex-column">
                  <h4>{card.brand_car.label}</h4>
                  <div className="d-flex gap-1 align-items-center mt-2">
                    <span className="fs-14-400 text-color">
                      {trans("my_cars.model")}
                    </span>
                    <span>{card.type_car.label}</span>
                  </div>
                  <div className="d-flex gap-1 align-items-center mt-1">
                    <span className="fs-14-400 text-color">
                      {trans("my_cars.body_num")}
                    </span>
                    <span>{card.structure_num}</span>
                  </div>
                </div>
                {/* Menu */}
                <DotsMenu>
                  <div className="px-3" style={{ width: "100px" }}>
                    <div
                      className="pointer"
                      onClick={() => {
                        setEditView(true);
                      }}
                    >
                      {trans("cars_market.body.edit")}
                    </div>
                  </div>
                </DotsMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCar;

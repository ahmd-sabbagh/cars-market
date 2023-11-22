import Filter from "./Components/Filter/Filter";
import Body from "./Components/Body/Body";
import SideBarWindow from "../../Components/SideBarWindow/SideBarWindow";

function CarsMarket() {
  return (
    <div className="CarsMarket py-5" style={{ backgroundColor: "#fafafa" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <SideBarWindow>
              <Filter />
            </SideBarWindow>
          </div>
          <div className="col-12 col-lg-8">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsMarket;

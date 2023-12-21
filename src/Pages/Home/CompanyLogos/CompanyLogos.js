import React from "react";
import "./CompanyLogos.css";
import Image1 from "./Assets/1.png";
import Image2 from "./Assets/2.png";
import Image3 from "./Assets/3.png";
import Image4 from "./Assets/4.png";
import Image5 from "./Assets/5.png";
import Image6 from "./Assets/6.png";
import Image7 from "./Assets/7.png";

function CompanyLogos() {
  const imgArr = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  return (
    <div className="CompanyLogos">
      <div className="container">
        <div
          className="images d-flex justify-content-center align-items-center gap-5 flex-wrap"
          data-aos="fade-up"
          data-aos-duration={`1000`}
          data-aos-offset="10"
        >
          {imgArr.map((item, idx) => (
            <div
              key={idx}
              className="logo"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyLogos;

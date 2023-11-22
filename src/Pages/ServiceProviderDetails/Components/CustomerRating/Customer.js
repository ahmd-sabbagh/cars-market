import React from "react";
import RatingView from "../../../../Components/RatingView/RatingView";
import image from "../Assets/Rectangle.png";
function Customer() {
  return (
    <div className="Customer border r-07 p-3">
      <div className="Top d-flex justify-content-between">
        <div className="info d-flex gap-3 align-items-center">
          <div
            className="image bg-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="text">
            <div className="name">{"Ahmed Adham"}</div>
            <div className="date">{"2مايو, 2022"}</div>
          </div>
        </div>
        <RatingView mt={"mt-0"} />
      </div>
      {/* text */}
      <p className="mt-3">
        {
          "أتعهد و أقسم بالله اننى تعاملت مع ورشة الهلال للميكانيا واقسم بالله اننى لا اقصد مكيدة او القصد برفع او انزال تقييم وان القصد من تقييمي هو افادة المشتريين"
        }
      </p>
    </div>
  );
}

export default Customer;

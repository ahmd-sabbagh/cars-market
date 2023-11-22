import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { trans } from "../../../../Components/Navbar/Navbar";

function UploadImage({title, image, setImage, errorValidation }) {
  return (
    <div className="UploadImage">
      <div className="span mb-12 d-block">{title}</div>
      <label
        htmlFor="select"
        className={`d-flex flex-column gap-3 align-items-center p-4 r-10 ${
          errorValidation.hasOwnProperty("file") && "border-red"
        }`}
      >
        <div className="icon">
          <FiUploadCloud />
        </div>
        <p className=" fs-14-400 text-color text-center">
         {trans("vendor.register.set_image")}<span>{trans("vendor.register.here")}</span>
        </p>
        <p>{image?.name}</p>
      </label>
      {/* Input Display None */}
      <input
        id="select"
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
        style={{ display: "none" }}
      />
      <span className="text-error fs-14-400">
        {errorValidation.hasOwnProperty("file")
          ? errorValidation.file[0]
          : null}
      </span>
    </div>
  );
}

export default UploadImage;

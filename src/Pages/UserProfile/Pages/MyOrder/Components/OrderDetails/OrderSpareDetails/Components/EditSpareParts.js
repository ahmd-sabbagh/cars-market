import React from "react";
import { trans } from "../../../../../../../../Components/Navbar/Navbar";
import { ReactComponent as Upload } from "./Assets/cloud-upload.svg";
import { useState } from "react";
import axios from "axios";
import { basedDomin } from "../../../../../../../../Api/basedDomin";
import { useNavigate } from "react-router-dom";
import {
  ErrorComponent,
  SuccsesComponent,
} from "../../../../../../../../Others/Error";
import { useRecoilState } from "recoil";
import { LoaderState } from "../../../../../../../../Recoil/All/Loader";

function EditSpareParts({ Data, setWiewEdit }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [errorValidation, setErrorValidation] = useState({});
  const [loader, setLoader] = useRecoilState(LoaderState);
  // States
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [count, setCount] = useState("");
  const [image, setImage] = useState();
  const [note, setNote] = useState("");
  // States
  // OnSubmit
  const formData = {
    name: name ? name : Data.name,
    industry: industry ? industry : Data.industry,
    count: count ? count : Data.count,
    image: image,
    note: note ? note : Data.note,
  };
  const submit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${basedDomin}/buyer/orders/parts/update/${Data.id}`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      SuccsesComponent(data.message);
      setLoader(false);
      setWiewEdit(false);
    } catch (error) {
      ErrorComponent(error, navigate, setErrorValidation);
      setLoader(false);
    }
  };
  return (
    <div className="EditSpareParts">
      <h3 className="fs-24-700 text-center mb-3">{"تعديل القطعة"}</h3>
      <form onSubmit={submit}>
        <div className="row g-3">
          {/* Name Spare */}
          <div className="col-12">
            <div className="d-flex flex-column gap-2">
              <span className="span">{trans("order_spare.name")}</span>
              <input
                defaultValue={Data.name}
                name="name"
                className="input"
                placeholder={trans("order_spare.name_placeholder")}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Quality */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-2">
              <span className="span">{trans("order_spare.quality")}</span>
              <input
                defaultValue={Data.industry}
                className="input"
                placeholder={trans("order_spare.quality_placeholder")}
                type="text"
                onChange={(e) => {
                  setIndustry(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Quantity */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-2">
              <span className="span">{trans("order_spare.quantity")}</span>
              <input
                defaultValue={Data.count}
                className="input"
                placeholder={trans("order_spare.quantity_placeholder")}
                type="number"
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
            </div>
          </div>
          {/* Photo */}
          <div className="col-12">
            <div className="d-flex flex-column gap-2">
              <span className="span">{trans("order_spare.add_photo")}</span>
              <label
                htmlFor="edit_spare"
                className="pointer py-4 d-flex flex-column align-items-center justify-content-center gap-2 upload-photo"
              >
                <span className="icon">
                  <Upload />
                </span>
                <span className="text text-green">
                  {trans("order_spare.add_photo_placeholder")}
                </span>
                {image ? (
                  <span
                    className="image-view mt-1"
                    style={{
                      backgroundImage: `url(${URL.createObjectURL(image)})`,
                    }}
                  ></span>
                ) : (
                  <span
                    className="image-view mt-1"
                    style={{
                      backgroundImage: `url(${Data.image})`,
                    }}
                  ></span>
                )}
              </label>
              <input
                id="edit_spare"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </div>
          </div>
          {/* Comments */}
          <div className="col-12">
            <div className="d-flex flex-column gap-2">
              <span className="span">{trans("order_spare.comments")}</span>
              <textarea
                defaultValue={Data.note}
                rows={3}
                className="input"
                placeholder={trans("order_spare.comments_placeholder")}
                type="text"
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          {/* Button Submit */}
          <div className="col-12">
            <div className="buttons d-flex gap-3 justify-content-center">
              <button type="submit" className="btn-blue d-block">
                {"حفظ"}
              </button>
              <button
                onClick={() => {
                  setWiewEdit(false);
                }}
                type="button"
                className="btn-border-blue d-block fit-content"
              >
                {"الغاء"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditSpareParts;

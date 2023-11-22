import React from "react";
import { trans } from "../Navbar/Navbar";
import User from "./User";
import image from "./geep.png";

function BlokedList() {
  const userData = [
    {
      image,
      name: "الكامل لقطع غيار السيارات",
      date: "2023-11-13T13:39:34.000000Z",
    },
    {
      image,
      name: "العالمية للصيانة",
      date: "2023-11-13T13:39:34.000000Z",
    },
  ];
  return (
    <div className="BlokedList p-3 p-md-4">
      <h3 className="fs-24-600">{trans("blocked_list.title")}</h3>
      <div className="cont mt-5 d-flex flex-column gap-3 gap-md-4">
        {userData.map((item, idx) => (
          <User {...item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default BlokedList;

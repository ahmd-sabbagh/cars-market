import React, { useState } from "react";
import { trans } from "../../../../../Components/Navbar/Navbar";
import Header from "../Header/Header";
import "./Subscriptions.css";
import Card from "./Components/Card";
import { Link } from "react-router-dom";

function Subscriptions() {
  // Header Data
  const headerData = {
    title: trans("vendor.subscriptions.title"),
    desc: trans("vendor.subscriptions.desc"),
  };
  // Header Dat
  // Packages Data
  const [typeSelect, setType] = useState("Silver");
  const packagesData = [
    {
      title: "الباقة البرونزية",
      desc: "الباقة الخاصة بقطع غيار السيارات هذ النص هو مثال لنص يمكن ان يستبدل الباقة الخاصة بقطع غيار السيارات هذ النص هو",
      price: "600 SAR ",
      text: "الدفع سنويا",
      type: "Bronze",
      state: typeSelect,
      setState: setType,
    },
    {
      title: "الباقة الفضية",
      desc: "الباقة الخاصة بقطع غيار السيارات هذ النص هو مثال لنص يمكن ان يستبدل الباقة الخاصة بقطع غيار السيارات هذ النص هو",
      price: "600 SAR ",
      text: "الدفع سنويا",
      type: "Silver",
      state: typeSelect,
      setState: setType,
    },
    {
      title: "الباقة الماسية",
      desc: "الباقة الخاصة بقطع غيار السيارات هذ النص هو مثال لنص يمكن ان يستبدل الباقة الخاصة بقطع غيار السيارات هذ النص هو",
      price: "600 SAR ",
      text: "الدفع سنويا",
      type: "Diamonds",
      state: typeSelect,
      setState: setType,
    },
  ];
  return (
    <div className="Subscriptions p-3 p-md-4">
      <Header {...headerData} />
      <div className="bg-white p-3 p-lg-4 r-10 mt-5">
        <h3 className="fs-24-600 text-center mt-3">
          {trans("subscription.title")}
        </h3>
        {/* Packages */}
        <div className="d-flex flex-wrap gap-3 mt-32">
          {packagesData.map((item, idx) => (
            <Card {...item} key={idx} />
          ))}
        </div>
        {/* Submit */}
        <Link className="btn-blue d-block mx-auto mt-4">
          {trans("subscription.sub_now")}
        </Link>
      </div>
    </div>
  );
}

export default Subscriptions;

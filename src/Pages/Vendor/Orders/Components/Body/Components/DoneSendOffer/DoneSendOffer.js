import React from "react";
import EmptyPopup from "../../../../../../../Components/EmptyPopup/EmptyPopup";
import DoneAdded from "../../../../../../../Components/DoneAdded/DoneAdded";
import { trans } from "../../../../../../../Components/Navbar/Navbar";

function DoneSendOffer() {
  const Data = {
    link1Text: trans("vendor.done_add_offer.link1Text"),
    link1To: "",
    link2Text: trans("vendor.done_add_offer.link2Text"),
    link2To: "",
    title: trans("vendor.done_add_offer.title"),
  };
  return (
    <>
      <EmptyPopup flex="500px">
        <DoneAdded {...Data} />
      </EmptyPopup>
    </>
  );
}

export default DoneSendOffer;

import { atom } from "recoil";
import { trans } from "../../../../../Components/Navbar/Navbar";

// Taps Type

export const TapsType = atom({
  key: "TapsType",
  default: "processing",
});

// Prossecing Data

export const mainDataOrderProcessing = atom({
  key: "mainDataOrderProcessing",
  default: [],
});

export const ExistStatus = atom({
  key: "ExistStatus",
  default: true,
});

export const changeData = atom({
  key: "changeData",
  default: "",
});

export const typeServices = atom({
  key: "typeServices",
  default: "all",
});

export const typeServicesText = atom({
  key: "typeServicesText",
  default: trans("my_order.all_order"),
});

// My Orders Loader

export const myOrderLoader = atom({
  key: "myOrderLoader",
  default: true,
});

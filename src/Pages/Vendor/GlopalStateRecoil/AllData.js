import { atom } from "recoil";

export const vendorMainLoader = atom({
  key: "vendorMainLoader",
  default: false,
});

export const openFilterOrderVendor = atom({
  key: "openFilterOrderVendor",
  default: true,
});

export const citiesFilterOrderVendor = atom({
  key: "citiesFilterOrderVendor",
  default: [],
});
export const typeCarsFilterOrderVendor = atom({
  key: "typeCarsFilterOrderVendor",
  default: [],
});

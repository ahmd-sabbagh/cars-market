import { atom } from "recoil";

export const filterTypesCars = atom({
  key: "filterTypesCars",
  default: [],
});

export const filterCities = atom({
  key: "filterCities",
  default: [],
});

// State Main Data
export const haragMainData = atom({
  key: "haragMainData",
  default: [],
});
// Filter Data
export const filterSearchData = atom({
  key: "filterSearchData",
  default: {},
});

// ExistStatus

export const marketExistStatus = atom({
  key: "application/json",
  default: false,
});

// Filter Saved Data
export const filterSavedData = atom({
  key: "filterSavedData",
  default: [],
});

import { atom } from "recoil";

export const getCarsForProfileUser = atom({
  key: "getCarsForProfileUser",
  default: [],
});

export const refreshDataGetCars = atom({
    key:"refreshDataGetCars",
    default:false
})
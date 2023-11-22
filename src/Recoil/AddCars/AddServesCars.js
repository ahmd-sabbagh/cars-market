import { atom } from "recoil";

export const typeServes = atom({
  key: "typeServes",
  default: "",
});
export const newCars = atom({
  key: "newCars",
  default: false,
});
export const addDefaultCar = atom({
  key: "addDefaultCar",
  default: false,
});
 
export const doneAddCar = atom({
  key: "doneAddCar",
  default: false,
});


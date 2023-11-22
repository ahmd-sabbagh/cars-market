import { atom } from "recoil";

export const MobilNumber = atom({
  key: "MobilNumber",
  default: "",
});
export const CountryCode = atom({
  key: "CountryCode",
  default: "20",
});

export const verifyCode = atom({
  key: "verifyCode",
  default: "",
});

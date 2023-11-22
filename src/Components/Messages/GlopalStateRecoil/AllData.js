import { atom } from "recoil";

export const openListUserMessages = atom({
  key: "openListUserMessages",
  default: false,
});

export const changeUserId = atom({
  key: "changeUserId",
  default: "",
});

export const messagesChanged = atom({
  key: "messagesChanged",
  default: [],
});
import { atom } from "recoil";

// content message
export const haragMessages = atom({
  key: "haragMessages",
  default: {
    adChat: { ad: "", user: "" },
    head: {},
    contentMessage: "",
    textMessage: [],
  },
});
// content message
// content messages
export const contentMessagesHarag = atom({
  key: "contentMessagesHarag",
  default: [],
});
// content messages

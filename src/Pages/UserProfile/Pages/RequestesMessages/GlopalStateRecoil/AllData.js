import { atom } from "recoil";

export const buyerOpenListUserMessages = atom({
  key: "buyerOpenListUserMessages",
  default: false,
});

export const buyerChangeUserId = atom({
  key: "buyerChangeUserId",
  default: {
    order_id: "",
    vendor_id: "",
  },
});

export const buyerMessagesChanged = atom({
  key: "buyerMessagesChanged",
  default: [],
});

// chose spares array from  spare parts

export const choseSparePartsArray = atom({
  key: "choseSparePartsArray",
  default: [],
});

// Filter List User

export const filterUserListType = atom({
  key: "filterUserListType",
  default: "maintenance_services",
});

// open window orders in chat

export const openWindowOrdersInChat = atom({
  key: "openWindowOrdersInChat",
  default: false,
});

// Change Status For Blocked User

export const blockedUserChangeStatus = atom({
  key: "blockedUserChangeStatus",
  default: false,
});

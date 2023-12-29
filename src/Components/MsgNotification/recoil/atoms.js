import { atom } from "recoil";
export const msgNotifications = atom({
  key: "msgNotifications",
  default: {},
});
// View Notification Msg
export const showNotificationMsg = atom({
  key: "showNotificationMsg",
  default: false,
});

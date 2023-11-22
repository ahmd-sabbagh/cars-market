import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import SignUp from "../Rigester/SignUp/SignUp";
import OutletRigester from "../Rigester/OutletRigester";
import Login from "../Rigester/Login/Login";
import RecoverPassword from "../Rigester/RecoverPassword/RecoverPassword";
import SendCode from "../Rigester/SendCode/SendCode";
import NewPassword from "../Rigester/NewPassword/NewPassword";
import AboutCarz from "../Pages/AboutCarz/AboutCarz";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OrderSpare from "../Pages/OrderSpare/OrderSpare";
import MaintenanceWorkshop from "../Pages/MaintenanceWorkshop/MaintenanceWorkshop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CarsMarket from "../Pages/CarsMarket/CarsMarket";
import AdsDetails from "../Pages/AdsDetails/AdsDetails";
import AddAdsCar from "../Pages/AddAdsCar/AddAdsCar";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MyCars from "../Pages/UserProfile/Pages/MyCars/MyCars";
import MyOrder from "../Pages/UserProfile/Pages/MyOrder/MyOrder";
import OrderDetails from "../Pages/UserProfile/Pages/MyOrder/Components/OrderDetails/OrderDetails";
import ServiceProviderDetails from "../Pages/ServiceProviderDetails/ServiceProviderDetails";
import VendorDetails from "../Pages/VendorDetails/VendorDetails";
import MyAds from "../Pages/UserProfile/Pages/MyAds/MyAds";
import HaragMessage from "../Pages/UserProfile/Pages/HaragMessage/HaragMessage";
import RequestesMessage from "../Pages/UserProfile/Pages/RequestesMessage/RequestesMessage";
import VerifyCode from "../Rigester/VerifyCode/VerifyCode";
import CheckUser from "../Others/CheckUser";
import OrderFlat from "../Pages/OrderFlat/OrderFlat";
import AdsEdit from "../Pages/AdsEdit/AdsEdit";
import VendorOutlet from "../Pages/Vendor/VendorOutlet/VendorOutlet";
import VendorHome from "../Pages/Vendor/Home/Home";
import Profile from "../Pages/Vendor/Profile/Profile";
import MyPoints from "../Pages/Vendor/Profile/Components/MyPoints/MyPoints";
import Subscriptions from "../Pages/Vendor/Profile/Components/Subscriptions/Subscriptions";
import FriendsClaims from "../Pages/Vendor/Profile/Components/FriendsClaims/FriendsClaims";
import AccountSetting from "../Components/AccountSetting/AccountSetting";
import BlokedList from "../Components/BlokedList/BlokedList";
import PackageUsed from "../Pages/Vendor/Profile/Components/PackageUsed/PackageUsed";
import ErrorRoute from "../Others/ErrorRoute/ErrorRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-carz",
        element: <AboutCarz />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "order-spare",
        element: <OrderSpare />,
      },
      {
        path: "workshop",
        element: <MaintenanceWorkshop />,
      },
      {
        path: "flatnies",
        element: <OrderFlat />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "cars-market",
        element: <CarsMarket />,
      },
      {
        path: "ad-details/:Id",
        element: <AdsDetails />,
      },
      {
        path: "add-ad",
        element: <AddAdsCar />,
      },
      {
        path: "add-edit/:Id",
        element: <AdsEdit />,
      },
      {
        path: "my-Profile",
        element: <UserProfile />,
        children: [
          {
            path: "",
            element: <AccountSetting />,
          },
          {
            path: "my-cars",
            element: <MyCars />,
          },
          {
            path: "my-ads",
            element: <MyAds />,
          },
          {
            path: "my-order",
            element: <MyOrder />,
          },
          {
            path: "order-details/:Id",
            element: <OrderDetails />,
          },
          {
            path: "harag-message",
            element: <HaragMessage />,
          },
          {
            path: "requestes-message",
            element: <RequestesMessage />,
          },
        ],
      },
      {
        path: "service-provider/:Id",
        element: <ServiceProviderDetails />,
      },
      {
        path: "vendor-details/:Id",
        element: <VendorDetails />,
      },
    ],
  },
  {
    path: "vendor",
    element: <VendorOutlet />,
    children: [
      {
        path: "",
        element: <VendorHome />,
      },
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <MyPoints />,
          },
          {
            path: "subscriptions",
            element: <Subscriptions />,
          },
          {
            path: "friends-claims",
            element: <FriendsClaims />,
          },
          {
            path: "setting",
            element: <AccountSetting />,
          },
          {
            path: "package-used",
            element: <PackageUsed />,
          },
          {
            path: "blocked",
            element: <BlokedList />,
          },
        ],
      },
    ],
  },
  {
    path: "register",
    element: CheckUser() ? <Navigate to="/" /> : <OutletRigester />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "verify",
        element: <SendCode />,
      },
      {
        path: "verify-code",
        element: <VerifyCode />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
    ],
  },
  {
    path: "verify-code",
    element: (
      <div className="VerifyCode-out flex-c px-3">
        <VerifyCode />
      </div>
    ),
  },
  {
    path: "route-error",
    element: <ErrorRoute />,
  },
]);

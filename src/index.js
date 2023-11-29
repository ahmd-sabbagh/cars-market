import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
// Aos
import "aos/dist/aos.css";
// Bootstrap
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min";
// Custom Css
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { RecoilRoot } from "recoil";
import InternetConnection from "./Others/InternetConnection/InternetConnection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InternetConnection>
      <RecoilRoot>
        <RouterProvider router={Router} /> 
      </RecoilRoot>
    </InternetConnection>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

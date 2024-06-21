import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SideBarContextProvider from "./context/SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <SideBarContextProvider>
        <App />
      </SideBarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

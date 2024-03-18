import React from "react";

import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Layout;

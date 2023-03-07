import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "../assets/sass/global.scss";
import Home from "./home/main";
import Try from "./account/pages/try/main";

const Router = () => {
  console.log("hi");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/try" element={<Try />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

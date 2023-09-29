/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../Pages/Dashboard/index.tsx";
import Customers from "../Pages/Customers/index.tsx";

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}

export default GlobalRoutes;

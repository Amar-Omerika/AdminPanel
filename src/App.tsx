import React from "react";
import MainLayout from "./layout/MainLayout";
import { SideBar } from "./components";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <MainLayout>
      <SideBar />
      <Dashboard />
    </MainLayout>
  );
}

export default App;

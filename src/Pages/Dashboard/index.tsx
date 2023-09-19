import React from "react";
import { AreaChart } from "../../components";

const Dashboard = () => {
  return (
    <div className="w-4/5">
      <div className="h-2/5 grid grid-cols-3 gap-3">
        <AreaChart />
        <AreaChart />
        <AreaChart />
      </div>
    </div>
  );
};

export default Dashboard;

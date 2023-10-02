import React, { useState } from "react";
import { SideBar, Table } from "../../components";
import MainLayout from "../../layout/MainLayout";
import {
  InboxStackIcon,
  BanknotesIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/solid";

const Customers = () => {
  const [active, setActive] = useState("clients");
  const handleActiveButton = (title: string) => {
    setActive(title);
  };
  return (
    <MainLayout>
      <SideBar />
      <div className="w-4/5">
        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="bg-white ml-5 rounded-md">
            <InboxStackIcon className="h-12 w-12 m-3 text-gray-500" />
            <h1 className="ml-3 text-lg">Total shipments</h1>
            <h1 className="ml-3 text-2xl font-bold">500</h1>
          </div>
          <div className="bg-white ml-5 rounded-md">
            <InboxArrowDownIcon className="h-12 w-12 m-3 text-gray-500" />
            <h1 className="ml-3 text-lg">Pending orders</h1>
            <h1 className="ml-3 text-2xl font-bold">120</h1>
          </div>
          <div className="bg-white ml-5 rounded-md mr-5">
            <BanknotesIcon className="h-12 w-12 m-3 text-gray-500" />
            <h1 className="ml-3 text-lg">Total shipments</h1>
            <h1 className="ml-3 text-2xl font-bold">$ 50.000</h1>
          </div>
        </div>
        <div className="w-full bg-white mt-16">
          <div className="p-5">
            <h1 className="mb-2">Client activity</h1>
            <div className="bg-lightGrey p-2 mb-2 w-[25%] rounded-md">
              {active === "clients" ? (
                <button
                  onClick={() => handleActiveButton("clients")}
                  className="bg-white p-2 rounded-md"
                >
                  Recent clients
                </button>
              ) : (
                <button
                  onClick={() => handleActiveButton("clients")}
                  className="p-2 rounded-md"
                >
                  Recent clients
                </button>
              )}
              {active === "orders" ? (
                <button
                  onClick={() => handleActiveButton("orders")}
                  className="bg-white p-2 ml-1 rounded-md"
                >
                  Order activity
                </button>
              ) : (
                <button
                  onClick={() => handleActiveButton("orders")}
                  className="p-2 ml-1 rounded-md"
                >
                  Order activity
                </button>
              )}
            </div>
            <Table content={active} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Customers;

import React from "react";
import { AreaChart, MultiLineChart } from "../../components";
import { faker } from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const OPTIONS_PLACEHOLDER = [
  {
    data: {
      labels,
      datasets: [
        {
          display: false,
          fill: true,
          label: "Orders",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(206, 92, 96, 1)",
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
    height: "100%",
    scales: {
      x: {
        display: false, // Hide the x-axis grid lines
      },
      y: {
        display: false, // Hide the y-axis grid lines
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as any,
      },
      title: {
        display: true,
        text: "Chart 1",
      },
    },
  },
  {
    data: {
      labels,
      datasets: [
        {
          display: false,
          fill: true,
          label: "Customers",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(35, 162, 206, 1)",
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
    height: "100%",
    scales: {
      x: {
        display: false, // Hide the x-axis grid lines
      },
      y: {
        display: false, // Hide the y-axis grid lines
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as any,
      },
      title: {
        display: true,
        text: "Chart 2",
      },
    },
  },
  {
    data: {
      labels,
      datasets: [
        {
          display: false,
          fill: true,
          label: "Users",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(227, 167, 60, 1)",
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
    height: "100%",
    scales: {
      x: {
        display: false, // Hide the x-axis grid lines
      },
      y: {
        display: false, // Hide the y-axis grid lines
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as any,
      },
      title: {
        display: true,
        text: "Chart 3",
      },
    },
  },
];

const Dashboard = () => {
  return (
    <div className="w-4/5">
      <div className="h-1/5 grid grid-cols-3 gap-3">
        {OPTIONS_PLACEHOLDER.map((option, index) => {
          return <AreaChart options={option} data={option.data} key={index} />;
        })}
      </div>
      <div className="h-2/5 flex">
        <MultiLineChart />
      </div>
    </div>
  );
};

export default Dashboard;

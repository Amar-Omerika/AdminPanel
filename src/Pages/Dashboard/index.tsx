import {
  AreaChart,
  MultiLineChart,
  VerticalBarChart,
  DoughnutChart,
  SideBar,
} from "../../components";
import { faker } from "@faker-js/faker";
import MainLayout from "../../layout/MainLayout";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
const MULTIAXISLINE_PLACEHOLDER_DATA = [
  {
    data: {
      labels,
      datasets: [
        {
          label: "Number of orders",
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(206, 92, 96, 1)",
          yAxisID: "y",
        },
        {
          label: "Number of customers",
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: "rgb(35, 162, 206)",
          backgroundColor: "rgba(35, 162, 206, 1)",
          yAxisID: "y1",
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: false,
    width: "100%",
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Statistic",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  },
];

const BARCHART_PLACEHOLDER_DATA = [
  {
    data: {
      labels,
      datasets: [
        {
          label: "Servings",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(206, 92, 96, 1)",
        },
        {
          label: "Staff",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(98, 69, 144, 1)",
        },
        {
          label: "Customers",
          data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          backgroundColor: "rgba(227, 167, 60, 1)",
        },
      ],
    },
    responsive: true,
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
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <SideBar />
      <div className="lg:w-4/5 sm:w-full">
        <div className="h-1/5 grid sm:grid-cols-1 gap-1 lg:gap-3 lg:grid-cols-3">
          {OPTIONS_PLACEHOLDER.map((option, index) => {
            return (
              <AreaChart options={option} data={option.data} key={index} />
            );
          })}
        </div>
        <div className="lg:h-2/5 sm:h-[200] lg:flex">
          {MULTIAXISLINE_PLACEHOLDER_DATA.map((option, index) => {
            return (
              <MultiLineChart options={option} data={option.data} key={index} />
            );
          })}
        </div>
        <div className="h-2/5 grid lg:grid-cols-2 lg:gap-2 sm:grid-cols-1 sm:gap-0">
          {BARCHART_PLACEHOLDER_DATA.map((option, index) => {
            return (
              <VerticalBarChart
                options={option}
                data={option.data}
                key={index}
              />
            );
          })}
          <div className="h-full flex">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;

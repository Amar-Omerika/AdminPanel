import React from "react";
import { AreaChart, MultiLineChart, VerticalBarChart } from "../../components";
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
    <div className="w-4/5">
      <div className="h-1/5 grid grid-cols-3 gap-3">
        {OPTIONS_PLACEHOLDER.map((option, index) => {
          return <AreaChart options={option} data={option.data} key={index} />;
        })}
      </div>
      <div className="h-2/5 flex">
        {MULTIAXISLINE_PLACEHOLDER_DATA.map((option, index) => {
          return (
            <MultiLineChart options={option} data={option.data} key={index} />
          );
        })}
      </div>
      <div className="h-2/5 flex">
        {BARCHART_PLACEHOLDER_DATA.map((option, index) => {
          return (
            <VerticalBarChart options={option} data={option.data} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

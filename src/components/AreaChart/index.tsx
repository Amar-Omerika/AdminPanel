import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const options = {
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
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
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
};

function AreaChart() {
  return (
    <div className="bg-white m-3 rounded-sm">
      <Line options={options} data={data} />
    </div>
  );
}
export default AreaChart;

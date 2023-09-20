import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Number of Votes",
      data: [25, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(206, 92, 96, 1)",
        "rgba(98, 69, 144, 1)",
        "rgba(227, 167, 60, 1)",
        "rgba(184, 87, 151, 1)",
        "rgba(67, 128, 150, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(206, 92, 96, 1)",
        "rgba(98, 69, 144, 1)",
        "rgba(227, 167, 60, 1)",
        "rgba(184, 87, 151, 1)",
        "rgba(67, 128, 150, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      position: "right" as any,
    },
    title: {
      display: true,
      text: "Number of votes",
    },
  },
};
function DoughnutChart() {
  return (
    <div className="bg-white px-2 m-3 rounded-sm">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;

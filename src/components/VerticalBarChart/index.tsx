import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  options?: any;
  data?: any;
}
function VerticalBarChart({ options, data }: Props) {
  return (
    <div className="bg-white m-3 rounded-sm">
      <Bar options={options} data={data} />
    </div>
  );
}
export default VerticalBarChart;

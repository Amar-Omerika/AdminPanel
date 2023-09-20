import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  options?: any;
  data?: any;
}
function MultiLineChart({ options, data }: Props) {
  return (
    <div className="bg-white w-full m-3 rounded-sm">
      <Line options={options} data={data} />
    </div>
  );
}

export default MultiLineChart;

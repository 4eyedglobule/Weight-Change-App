import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Linegraph = ({ inputData }) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgb(255, 255, 255)",
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          color: "rgb(255, 255, 255)",
        },
      },
      y: {
        grid: {
          color: "rgb(255, 255, 255)",
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          color: "rgb(255, 255, 255)",
        },
        min: 0,
        suggestedMax: 400,
      },
    },
  };
  return <Line options={options} data={inputData} />;
};

export default Linegraph;

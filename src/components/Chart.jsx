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
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      //   display: true,
      //   text: "Chart.js Line Chart",
    },
  },
};

const createData = (points) => {
  let labels = [];
  let dataset = [];
  // const label = points[2].point.key
  // console.log("Creating Dataset");
  // console.log(points);
  points.forEach((elemnt) => {
    // console.log(elemnt);
    labels.push(elemnt.timeStamp);
    dataset.push(elemnt.point.value);
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Temprature",
        data: dataset,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Humidity",
        data: dataset,
        borderColor: "rgb(99, 148, 255)",
        backgroundColor: "rgba(99, 141, 255, 0.5)",
      },
      {
        label: "Amonia",
        data: dataset,
        borderColor: "rgb(195, 255, 99)",
        backgroundColor: "rgba(221, 255, 99, 0.5)",
      },
    ],
  };
  // console.log(data);
  return data;
};

export function Chart({ data }) {
  //   console.log(data.splice(0, 1));
  const points = createData(data.slice(-20));
  // createData(data)
  return <Line options={options} data={points} />;
}

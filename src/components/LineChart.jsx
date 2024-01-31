// components/LineChart.js
import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { collatzSequenceForLine } from "@/utils/collatz_data";

const LineChart = ({ input }) => {
  const [collatzData, setCollatzData] = useState([]);

  useEffect(() => {
    // Update Collatz sequence data based on input
    setCollatzData(collatzSequenceForLine(input));
  }, [input]);

  const data = {
    labels: Array.from({ length: collatzData.length }, (_, index) => index + 1),
    datasets: [
      {
        label: "Collatz Sequence",
        data: collatzData,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Line Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;

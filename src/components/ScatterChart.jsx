"use client";

// components/ScatterChart.js
import React, { useState, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Scatter } from "react-chartjs-2";
import { CollatzSequenceForScatter } from "@/utils/collatz_data";

const ScatterChart = ({ input }) => {
  const [collatzData, setCollatzData] = useState([]);

  useEffect(() => {
    // Update Collatz sequence data based on input
    setCollatzData(CollatzSequenceForScatter(input));
  }, [input]);

  const data = {
    datasets: [
      {
        label: "Collatz Sequence",
        data: collatzData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Scatter Chart</h2>
      <Scatter data={data} />
    </div>
  );
};

export default ScatterChart;

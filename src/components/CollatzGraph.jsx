// components/CollatzGraph.js
import React, { useState } from "react";
import LineChart from "./LineChart";
import ScatterChart from "./ScatterChart";

const CollatzGraph = () => {
  const [input, setInput] = useState(1784); // default input value
  const [isLineChart, setIsLineChart] = useState(true);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInput(value || 1);
  };

  const handleChartTypeSwitch = () => {
    setIsLineChart((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      {/* User Input Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Enter a positive integer:
        </label>
        <input
          type="number"
          className="mt-1 p-2 border rounded"
          value={input}
          onChange={handleInputChange}
        />
      </div>

      {/* Collatz Graph Section */}
      {isLineChart ? (
        <LineChart input={input} />
      ) : (
        <ScatterChart input={input} />
      )}

      {/* Chart Type Switch */}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleChartTypeSwitch}
        >
          Switch Chart Type
        </button>
      </div>
    </div>
  );
};

export default CollatzGraph;

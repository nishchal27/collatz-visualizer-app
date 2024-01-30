"use client";

import { useState } from "react";
import CollatzGraph from "../components/CollatzGraph";
import { collatzSequence } from "../utils/collatz_data";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [collatzData, setCollatzData] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleVisualizeClick = () => {
    // Implement logic to generate Collatz sequence and update collatzData state
    // Use this data to update the graph dynamically

    const inputValueNumber = parseInt(inputValue, 10);

    if (!isNaN(inputValueNumber) && inputValueNumber > 0) {
      const sequence = collatzSequence(inputValueNumber);

      const data = {
        labels: sequence.map((_, index) => index + 1),
        datasets: [
          {
            label: "Collatz Sequence",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            data: sequence,
          },
        ],
      };

      setCollatzData(data);
    } else {
      // Handle invalid input
      console.error("Invalid input. Please enter a positive integer.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Collatz Conjecture Visualizer</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-4"
      />
      <button
        onClick={handleVisualizeClick}
        className="bg-blue-500 text-white p-2"
      >
        Visualize Collatz Sequence
      </button>
      {Object.keys(collatzData).length > 0 && (
        <CollatzGraph data={collatzData} />
      )}
    </div>
  );
}

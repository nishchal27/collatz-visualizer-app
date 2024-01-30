"use client";

import { useState } from "react";
import CollatzGraph from "../components/CollatzGraph";
import { collatzSequence } from "../utils/collatz_data";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [collatzData, setCollatzData] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleVisualizeClick = () => {
    const inputValueNumber = parseInt(inputValue, 10);

    if (!isNaN(inputValueNumber) && inputValueNumber > 0) {
      const sequence = collatzSequence(inputValueNumber);
      console.log("sequence: ",sequence)

      const data = {
        labels: Array.from({ length: sequence.length }, (_, i) => i + 1),
        datasets: [
          {
            label: "Collatz Sequence",
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: 'rgba(75,192,192,1)',
            data: sequence,
          },
        ],
      };

      setCollatzData(data);
    } else {
      // Handle invalid input
      toast.error("Invalid input. Please enter a positive integer.");
    }
  };

  return (
    <div className="w-auto">
      <Toaster/>
    <div className="px-4 sm:px-8 flex flex-col items-center py-2 my-4 min-h-screen justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Collatz Conjecture Visualizer</h1>
      <div className="sm:space-x-2">
      <input
        type="number"
        placeholder="Enter a positive number"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-4"
        />
      <button
        onClick={handleVisualizeClick}
        className="bg-blue-500 text-white p-2 rounded-md"
        >
        Visualize Collatz Sequence
      </button>
        </div>
      {Object.keys(collatzData).length > 0 && (
        <CollatzGraph data={collatzData} />
      )}
    </div>
    </div>
  );
}

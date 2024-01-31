"use client";

import { useState } from "react";
import CollatzGraph from "../components/CollatzGraph";

export default function Home() {
  // toast.error("Invalid input. Please enter a positive integer.");

  return (
    <div className="w-auto">
      <div className="px-4 sm:px-16 flex flex-col items-center py-2 my-4 min-h-screen justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Collatz Conjecture Visualizer
        </h1>
        <CollatzGraph />
      </div>
    </div>
  );
}

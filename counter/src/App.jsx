import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Counter App</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-5xl font-semibold mb-4">{count}</h2>
        <div className="flex space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            Increment
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition"
          >
            Reset
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

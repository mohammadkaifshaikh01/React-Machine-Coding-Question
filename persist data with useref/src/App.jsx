import React, { useEffect, useRef } from "react";

const App = () => {
  const valueRef = useRef(null);

  useEffect(() => {
    valueRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Value:", valueRef.current.value);
    valueRef.current.value = ""
    valueRef.current.focus();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Enter Your Name
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name..."
          ref={valueRef}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default App;

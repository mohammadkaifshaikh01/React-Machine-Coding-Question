import React, { useState, useEffect } from "react";

const App = () => {
  const API = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false)

  const fetchApi = async () => {
    try {
      setLoading(true)
      const response = await fetch(API);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">{loading ? "Data Fetching...." : "Products"}</h1>
      


      
      {loading ? (
        <p>Data Fetching......</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">Title : {item.title}</h3>
            <p className="text-gray-700 font-medium">Price : {item.price}</p>
            <p className="text-sm text-gray-500">Category : {item.category}</p>
          </div>
        ))}
      </div>
      )}
      </div>
    
  );
};

export default App;

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addBtnHandler = () => {
    setCount(count + 1)
  }

  const subBtnHandler = () => {
   count > 1 && setCount(count - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addBtnHandler}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={subBtnHandler}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

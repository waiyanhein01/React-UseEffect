import React, { useEffect, useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  console.log("Update",count)

  const addBtnHandler = () => {
    setCount(count + 1);
  };

  const subBtnHandler = () => {
    count > 1 && setCount(count - 1);
  };

  useEffect(() => {
    // Effect body
    console.log("Content Mounted");

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    const randomNumber = setInterval(() => {
      console.log("randomNumber",Math.random())
    }, 2000);


    return () => {
      // Clean Up function
      console.log("Content Unmounted");
      clearInterval(randomNumber)
    };
  }, [count]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hide/Show Component Example</h1>
      <p className="text-gray-800">
        This is the content that will be hidden or shown.
      </p>
      <ul className="mt-2">
        <li className="text-gray-800">List item 1</li>
        <li className="text-gray-800">List item 2</li>
        <li className="text-gray-800">List item 3</li>
      </ul>
      <h1 className="text-2xl font-bold mb-4 mt-4">Counter: {count}</h1>

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
  );
};

export default Content;

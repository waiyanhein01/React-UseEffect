import React, { useState } from "react";
import Content from "./Content";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center m-10 p-10 border border-gray-600 rounded-xl">
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <Content />}
      </div>
    </>
  );
};

export default HideShow;

import React from "react";

const Frame = ({ logo, text, longText, onClick, className }) => {
  return (
    <div
      className={`w-full border border-gray-300 rounded-md p-4 pr-5 flex flex-col gap-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {logo}
      <p className=" font-semibold mt-2">{text}</p>
      <p className=" text-gray-500">{longText}</p>
    </div>
  );
};

export default Frame;

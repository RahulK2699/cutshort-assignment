import React from "react";

const Stepper = ({ count }) => {
  const arr = [1, 2, 3, 4];
  return (
    <div className=" flex mb-10">
      {arr.map((e, index) => (
        <div key={index + 1} className="flex items-center">
          <p
            className={`w-8 h-[2px]  bg-gray-400 ${
              index + 1 <= count ? "bg-[#684ce4]" : ""
            } ${index + 1 === 1 ? "hidden" : ""} `}
          ></p>
          <div
            className={` w-9 h-9 rounded-[18px] border border-gray-400 text-xs relative  ${
              index + 1 <= count ? " border-none bg-[#684ce4] text-white" : ""
            }`}
          >
            <p className="absolute left-[14px] top-2"> {e}</p>
          </div>
          <p
            className={`w-8 h-[2px] bg-gray-400  ${
              index + 1 <= count ? "bg-[#684ce4]" : ""
            } ${index + 1 === 4 ? "hidden" : ""}`}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

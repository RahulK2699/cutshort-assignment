import React from "react";

const Stepper = ({ count }) => {
  const arr = [1, 2, 3, 4];
  return (
    <div className=" flex mb-10">
      {arr.map((e, index) => (
        <div key={index + 1} className="flex items-center">
          <p
            className={`stepper-p h-[0.08rem] ${
              index + 1 <= count ? "bg-[#684ce4]" : ""
            } ${index + 1 === 1 ? "hidden" : ""} `}
          ></p>
          <div
            className={` stepper-div rounded-[18px] ${
              index + 1 <= count ? "stepper-bg-violet" : ""
            }`}
          >
            <p className="absolute left-[14px] top-[9px]"> {e}</p>
          </div>
          <p
            className={`stepper-p h-[0.08rem] ${
              index + 1 <= count ? "bg-[#684ce4]" : ""
            } ${index + 1 === 4 ? "hidden" : ""}`}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

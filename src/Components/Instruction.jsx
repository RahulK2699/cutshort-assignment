import React from "react";

const Instruction = ({ heading, subheading }) => {
  return (
    <div className=" flex flex-col gap-2 items-center mb-5">
      <p className=" text-3xl font-semibold text-center">{heading}</p>
      <p className=" text-gray-500 text-center">{subheading}</p>
    </div>
  );
};

export default Instruction;

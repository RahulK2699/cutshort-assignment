import React from "react";

const Instruction = ({ heading, subheading }) => {
  return (
    <div className=" flex flex-col gap-2 items-center">
      <p className=" text-3xl font-semibold">{heading}</p>
      <p className=" text-gray-500">{subheading}</p>
    </div>
  );
};

export default Instruction;

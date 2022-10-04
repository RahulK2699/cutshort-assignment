import React from "react";

const Instruction = ({ heading, subheading }) => {
  return (
    <div className=" instruction-div-wrapper">
      <p className=" instruction-heading">{heading}</p>
      <p className=" instruction-subheading">{subheading}</p>
    </div>
  );
};

export default Instruction;

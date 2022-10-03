import React from "react";

const Button = ({ className, children, isDisabled = false, onClick }) => {
  return (
    <button
      className={`w-1/2 md:w-[380px]  text-center p-3 rounded-md bg-violet-500 text-sm text-gray-300 font-medium  mt-5 ${className}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

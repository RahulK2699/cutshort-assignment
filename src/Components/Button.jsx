import React from "react";

const Button = ({ className, children }) => {
  return (
    <button
      className={`w-[380px] text-center p-3 rounded-md bg-violet-500 text-sm text-white font-medium text-opacity-80 mt-5 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

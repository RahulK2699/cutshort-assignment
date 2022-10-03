import React from "react";

const Button = ({ className, children, isDisabled = false, onClick }) => {
  return (
    <button
      className={`btn ${className}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Frame = ({ logo, text, longText, onClick, className }) => {
  return (
    <div className={`frame-div-wrapper ${className}`} onClick={onClick}>
      {logo}
      <p className=" frame-text">{text}</p>
      <p className=" text-gray-500">{longText}</p>
    </div>
  );
};

export default Frame;

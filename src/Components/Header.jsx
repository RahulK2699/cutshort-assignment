import React from "react";
import cutshort1 from "../assets/images/cutshort1.png";

const Header = () => {
  return (
    <div className=" flex gap-1 w-fit items-center my-8">
      <img src={cutshort1} alt="cutshort1" />
      <p className=" text-3xl font-semibold">Eden</p>
    </div>
  );
};

export default Header;

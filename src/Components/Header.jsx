import React from "react";
import cutshort1 from "../assets/images/cutshort1.png";

const Header = () => {
  return (
    <div className=" header-wrapper">
      <img src={cutshort1} alt="cutshort1" />
      <p className=" header-p">Eden</p>
    </div>
  );
};

export default Header;

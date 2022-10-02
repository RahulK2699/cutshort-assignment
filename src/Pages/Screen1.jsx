import React from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";

import { useState } from "react";
import { Link } from "react-router-dom";

const Screen1 = () => {
  const [params, setParams] = useState({ firstName: "", displayName: "" });
  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
      <Instruction
        heading={"Welcome! First thing first..."}
        subheading={"You can always change them later"}
      />
      <Form
        label1={"Full Name"}
        label2={"Display Name"}
        onChange={(e) => handleChange(e)}
        value1={params.firstName}
        value2={params.displayName}
        name1={"firstName"}
        name2={"displayName"}
      />
      <Link to={"/screen2"}>
        <Button>Create Workspace</Button>
      </Link>
    </div>
  );
};

export default Screen1;

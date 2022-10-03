import React from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../common/validate";
import Stepper from "../Components/Stepper";

const Screen1 = () => {
  const input_data = { firstname: "", displayname: "" };
  const [params, setParams] = useState(input_data);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const handleClick = () => {
    const myFunc = validate(params, {
      displayname: "required|max:15|min:3",
      firstname: "required|min:3|max:15|string",
    });
    let isValid = Object.keys(myFunc).length;

    if (isValid > 0) setFormErrors({ ...myFunc });
    else navigate("/screen2");
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
      <Stepper count={1} />
      <Instruction
        heading={"Welcome! First thing first..."}
        subheading={"You can always change them later"}
      />
      <Form
        label1={"Full Name"}
        label2={"Display Name"}
        onChange={(e) => handleChange(e)}
        value1={params.firstname}
        value2={params.displayname}
        name1={"firstname"}
        name2={"displayname"}
        error1={formErrors?.firstname}
        error2={formErrors?.displayname}
      />

      <Button
        className={" cursor-pointer"}
        isDisabled={!params.firstname || !params.displayname}
        onClick={() => handleClick()}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default Screen1;

import React from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";
import Stepper from "../Components/Stepper";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../common/validate";
import { field } from "../common/field";

const Screen2 = () => {
  const [params, setParams] = useState({ workspaceName: "", workspaceURL: "" });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const rules = field.screen2;

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  const handleClick = () => {
    const myFunc = validate(params, rules);
    let isValid = Object.keys(myFunc).length;

    if (isValid > 0) setFormErrors({ ...myFunc });
    else navigate("/screen3");
  };
  return (
    <div className="div-wrapper">
      <Header />
      <Stepper count={2} />
      <Instruction
        heading={"Lets set up a home for all your work"}
        subheading={"You can always create another workspace later"}
      />
      <Form
        label1={"Workspace Name"}
        label2={"Workspace URL"}
        onChange={(e) => handleChange(e)}
        value1={params.workspaceName}
        value2={params.workspaceURL}
        name1={"workspaceName"}
        name2={"workspaceURL"}
        optional={"(optional)"}
        error1={formErrors.workspaceName}
        error2={formErrors.workspaceURL}
      />

      <Button
        className={" cursor-pointer"}
        isDisabled={!params.workspaceName}
        onClick={() => handleClick()}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default Screen2;

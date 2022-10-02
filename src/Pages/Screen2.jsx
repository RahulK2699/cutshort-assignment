import React from "react";
import Form from "../Components/Form";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Screen2 = () => {
  const [params, setParams] = useState({ workspaceName: "", workspaceURL: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
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
      />

      <Button
        className={" cursor-pointer"}
        isDisabled={!params.workspaceName}
        onClick={() => navigate("/screen3")}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default Screen2;

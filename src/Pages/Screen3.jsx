import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";
import Frame from "../Components/Screen3/Frame";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import Stepper from "../Components/Stepper";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  border: "1px solid #684ce4",
};

const Screen3 = () => {
  const [selected, setSelected] = useState(true);

  const navigate = useNavigate();

  console.log(selected);

  return (
    <div className="div-wrapper">
      <Header />
      <Stepper count={3} />
      <Instruction
        heading={"How are you planning to use Eden ?"}
        subheading={"We'll streamline your setup experience accordingly"}
      />
      <div className=" frame-div-wrapper w-[400px] ">
        <Frame
          // style={selected ? { border: styles.border } : ""}
          selected={selected}
          className={selected ? " border-bgviolet" : ""}
          logo={<PersonIcon className={selected ? " text-violet-500" : ""} />}
          text={"For myself"}
          longText={"Write better, Think more clearly. Stay organized"}
          onClick={() => setSelected(true)}
        />
        <Frame
          // style={!selected ? { border: styles.border } : ""}
          className={!selected ? " border-bgviolet" : ""}
          selected={selected}
          logo={<GroupsIcon className={!selected ? " text-violet-500" : ""} />}
          text={"With my team"}
          longText={" Wikis, docs, tasks & projects, all in one place"}
          onClick={() => setSelected(false)}
        />
      </div>

      <Button
        className={" cursor-pointer"}
        onClick={() => navigate("/screen4")}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default Screen3;

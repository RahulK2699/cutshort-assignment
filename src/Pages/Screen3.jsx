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

const Screen3 = () => {
  const [selected, setSelected] = useState({ frame1: false, frame2: false });

  const navigate = useNavigate();

  return (
    <div className="div-wrapper">
      <Header />
      <Stepper count={3} />
      <Instruction
        heading={"How are you planning to use Eden ?"}
        subheading={"We'll streamline your setup experience accordingly"}
      />
      <div className=" frame-div-wrapper w-[400px]">
        <Frame
          className={selected.frame1 ? "border border-[#684ce4]" : ""}
          logo={
            <PersonIcon className={selected.frame1 ? " text-violet-500" : ""} />
          }
          text={"For myself"}
          longText={"Write better, Think more clearly. Stay organized"}
          onClick={() =>
            setSelected({ ...selected, frame1: true, frame2: false })
          }
        />
        <Frame
          className={selected.frame2 ? "border border-[#684ce4]" : ""}
          logo={
            <GroupsIcon className={selected.frame2 ? " text-violet-500" : ""} />
          }
          text={"With my team"}
          longText={" Wikis, docs, tasks & projects, all in one place"}
          onClick={() =>
            setSelected({ ...selected, frame2: true, frame1: false })
          }
        />
      </div>

      <Button
        className={" cursor-pointer"}
        isDisabled={!selected.frame1 && !selected.frame2}
        onClick={() => navigate("/screen4")}
      >
        Create Workspace
      </Button>
    </div>
  );
};

export default Screen3;

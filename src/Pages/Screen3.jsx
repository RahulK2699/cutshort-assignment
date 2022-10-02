import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";
import Frame from "../Components/Screen3/Frame";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
const Screen3 = () => {
  const [selected, setSelected] = useState({ frame1: false, frame2: false });

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
      <Instruction
        heading={"How are you planning to use Eden ?"}
        subheading={"We'll streamline your setup experience accordingly"}
      />
      <div className=" flex gap-7 w-[400px]">
        <Frame
          className={selected.frame1 ? "border border-violet-500" : ""}
          logo={
            <PersonIcon className={selected.frame1 ? " text-violet-500" : ""} />
          }
          text={"for myself"}
          longText={"Write better, Think more clearly. Stay organized"}
          onClick={() =>
            setSelected({ ...selected, frame1: true, frame2: false })
          }
        />
        <Frame
          className={selected.frame2 ? "border border-violet-500" : ""}
          logo={
            <GroupsIcon className={selected.frame2 ? " text-violet-500" : ""} />
          }
          text={"With my team"}
          longText={" Write docs, tasks and projects all in one place"}
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

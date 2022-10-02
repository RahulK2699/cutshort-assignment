import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Instruction from "../Components/Instruction";
import Frame from "../Components/Screen3/Frame";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
const Screen3 = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
      <Instruction
        heading={"How are you planning to use Eden ?"}
        subheading={"We'll streamline your setup experience accordingly"}
      />
      <div className=" flex gap-7 w-[400px]">
        <Frame
          logo={<PersonIcon />}
          text={"for myself"}
          longText={"Write better, Think more clearly. Stay organized"}
        />
        <Frame
          logo={<GroupsIcon />}
          text={"With my team"}
          longText={" Write docs, tasks and projects all in one place"}
        />
      </div>

      <Link to={"/screen4"}>
        <Button>Create Workspace</Button>
      </Link>
    </div>
  );
};

export default Screen3;

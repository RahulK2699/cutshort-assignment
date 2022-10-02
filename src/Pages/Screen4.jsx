import React from "react";
import Header from "../Components/Header";
import CheckIcon from "@mui/icons-material/Check";
import Instruction from "../Components/Instruction";
import Button from "../Components/Button";

const Screen4 = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-fit m-auto">
      <Header />
      <div className=" relative bg-violet-500 w-16 h-16 rounded-[32px] mb-7">
        <div className=" absolute bottom-5 left-5">
          <CheckIcon className=" text-white" />
        </div>
      </div>

      <Instruction
        heading={"Congratulations, Eren!"}
        subheading={
          "You have completed onboarding, you can start using the Eden!"
        }
      />

      <Button>Launch Eden</Button>
    </div>
  );
};

export default Screen4;

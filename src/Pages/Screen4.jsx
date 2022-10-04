import React from "react";
import Header from "../Components/Header";
import CheckIcon from "@mui/icons-material/Check";
import Instruction from "../Components/Instruction";
import Button from "../Components/Button";
import Stepper from "../Components/Stepper";

const Screen4 = () => {
  return (
    <div className="div-wrapper">
      <Header />
      <Stepper count={4} />
      <div className="check-outer-div rounded-[32px]">
        <div className="check-inner-div">
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

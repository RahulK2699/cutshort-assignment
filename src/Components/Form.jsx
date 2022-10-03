import React from "react";

const Form = ({
  label1,
  label2,
  onChange,
  value1,
  value2,
  optional = "",
  name1,
  name2,
  error1,
  error2,
}) => {
  return (
    <form className=" w-[380px] flex flex-col gap-5">
      <div className="relative">
        <label className=" block mb-2 font-medium text-sm text-gray-600">
          {label1}
        </label>
        <input
          className=" outline-none border border-gray-200 p-2 rounded-md text-gray-500 
                font-medium w-full pl-4"
          type="text"
          name={name1}
          value={value1}
          onChange={onChange}
        />
        <p className=" text-red-500 absolute text-[10px] ">{error1}</p>
      </div>

      <div>
        <label className=" block mb-2 font-medium text-sm text-gray-600">
          {label2} <span>{optional}</span>
        </label>
        <input
          className=" outline-none border border-gray-200 p-2 rounded-md text-gray-500 
                font-medium w-full pl-4"
          type="text"
          value={value2}
          onChange={onChange}
          name={name2}
        />
        <p className="  text-red-500 absolute text-[10px] ">{error2}</p>
      </div>
    </form>
  );
};

export default Form;

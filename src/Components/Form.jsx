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
}) => {
  return (
    <form className=" w-[380px] flex flex-col gap-4">
      <div className="">
        <label className=" block mb-2 font-medium text-sm text-gray-500">
          {label1}
        </label>
        <input
          className=" outline-none border border-gray-200 p-2 rounded-md text-gray-500 
                font-medium w-full"
          type="text"
          name={name1}
          value={value1}
          onChange={onChange}
        />
      </div>

      <div>
        <label className=" block mb-2 font-medium text-sm text-gray-500">
          {label2} <span>{optional}</span>
        </label>
        <input
          className=" outline-none border border-gray-200 p-2 rounded-md text-gray-500 
                font-medium w-full"
          type="text"
          value={value2}
          onChange={onChange}
          name={name2}
        />
      </div>
    </form>
  );
};

export default Form;

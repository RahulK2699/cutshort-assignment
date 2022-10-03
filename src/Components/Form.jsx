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
    <form className=" form-wrapper">
      <div className="relative">
        <label className=" form-label">{label1}</label>
        <input
          className=" form-input"
          type="text"
          name={name1}
          value={value1}
          onChange={onChange}
        />
        <p className=" form-error ">{error1}</p>
      </div>

      <div>
        <label className=" form-label">
          {label2}{" "}
          <span className=" text-gray-600 text-opacity-40">{optional}</span>
        </label>
        <input
          className="form-input"
          type="text"
          value={value2}
          onChange={onChange}
          name={name2}
        />
        <p className="  form-error ">{error2}</p>
      </div>
    </form>
  );
};

export default Form;

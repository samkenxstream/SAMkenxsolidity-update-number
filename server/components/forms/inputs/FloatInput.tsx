import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classLabel?: string;
  classInput?: string;
}

const FloatInput: React.FC<Props> = ({
  type = "text",
  name,
  className,
  placeholder,
  label,
  min,
  max,
  classLabel,
  classInput,
  onChange,
}) => {
  return (
    <div className={`relative z-0 mb-6 w-full group ${className || ""}`}>
      <input
        type={type}
        name={name}
        className={`input-float peer ${classInput || ""}`}
        placeholder={placeholder || " "}
        onChange={onChange}
        min={min}
        max={max}
      />
      <label htmlFor="name" className={`label-float ${classLabel || ""}`}>
        {label}
      </label>
    </div>
  );
};

export default FloatInput;

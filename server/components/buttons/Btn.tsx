import React, { useState } from "react";

export interface BtnProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Btn: React.FC<BtnProps> = ({
  onClick,
  text,
  className,
  disabled,
  type,
}) => {
  return (
    <div>
      <button
        type={type}
        className={className || ""}
        onClick={onClick}
        disabled={disabled}
      >
        {text && text}
      </button>
    </div>
  );
};

export default Btn;

import { useState } from "react";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  disabled?: boolean;
  text?: string;
  children?: React.ReactNode;
  datacy?: string;
  target?: string;
  passHref?: boolean;
};

const CustomLink: React.FC<Props> = ({
  href,
  text,
  className,
  disabled,
  children,
  datacy,
  target,
  passHref,
}) => {
  return (
    <Link href={href || ""} passHref={passHref}>
      <a
        target={target}
        data-cy={datacy}
        className={`${className || ""}`}
        style={disabled ? style : undefined}
      >
        {children}
        {text && text}
      </a>
    </Link>
  );
};

export default CustomLink;

const style = {
  color: "rgba(255, 255, 255, 0.25) !important",
  cursor: "default",
  pointerEvents: "none" as "none",
};

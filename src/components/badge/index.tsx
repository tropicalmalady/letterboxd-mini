import React from "react";

interface BadgeProps {
  title: string;
}

export default function Badge({ title }: BadgeProps) {
  return (
    <span
      className="text-xs text-primary-10 bg-[#283038] py-[0.1875rem]  px-[0.375rem] rounded-[0.1875rem] inline-block whitespace-nowrap"
      style={{ boxShadow: "inset 0 1px 0 hsla(0, 0%, 100%, .05)" }}
    >
      {title}
    </span>
  );
}

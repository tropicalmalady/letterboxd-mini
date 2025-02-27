import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { Toaster } from "sonner";

export function Toast() {
  return (
    <Toaster
      position="top-center"
      visibleToasts={1}
      icons={{
        error: <MdError className="text-[1.5rem] text-error" />,
        warning: <MdError className="text-[1.5rem] text-error" />,
        info: <MdError className="text-[1.5rem] text-secondary" />,
        success: <FaCircleCheck className="text-[1.5rem] text-accent" />,
      }}
      toastOptions={{
        unstyled: true,
        className:
          "font-14 rounded-[0.75rem] shadow-sm p-[1rem] bg-white flex gap-[0.75rem] items-center",
        classNames: {
          error: "text-error",
          success: "text-accent",
          info: "text-primary",
          warning: "text-error",
        },
      }}
    />
  );
}

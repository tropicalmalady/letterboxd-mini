import React from "react";
import {
  TextArea as RACTextArea,
  TextAreaProps as RACTextAreaProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { InputProps, inputStyle } from "../input";

interface TextAreaProps
  extends RACTextAreaProps,
    Pick<InputProps, "isInvalid"> {}

const textAreaStyle = tv({
  extend: inputStyle,
  base: "h-[6.75rem]",
});

export function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <RACTextArea
      {...rest}
      className={textAreaStyle({ className: className as string })}
    />
  );
}

import React from "react";
import {
  Input as RACInput,
  InputProps as RACInputProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export interface InputProps extends RACInputProps {
  isInvalid?: boolean;
}

export const inputStyle = tv({
  base: [
    "px-4",
    "py-2",
    "border-on-primary",
    "border",
    "rounded-lg",
    "w-full",
    "text-[14px]",
    "desktop:text-[0.875rem]",
    "data-[focused]:border-secondary",
    "data-[focused]:border-[0.1875rem]",
    "placeholder:text-primary-6",
    "data-[disabled]:shadow-[0_0_0]",
    "data-[disabled]:bg-grey-100",
    "data-[disabled]:opacity-50",
    "data-[disabled]:cursor-not-allowed",
    "data-[invalid]:border-warning-1 data-[invalid]:border",
    "ease-in",
    "outline-none"
  ],
});

export function Input({ className, ...rest }: InputProps) {
  return (
    <RACInput
      {...rest}
      className={inputStyle({ className: className as string })}
    />
  );
}

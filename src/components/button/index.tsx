import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";
import { Loader } from "../loader";
import React from "react";

export interface ButtonProps extends RACButtonProps {
  variant?: VariantProps<typeof buttonStyle>;
  isLoading?: boolean;
  loadingText?: string;
}

export const buttonStyle = tv({
  base: "transition-all ease-out inline-flex items-center justify-center font-bold rounded-[0.3rem] font-bold px-3 py-1.5 md:px-7 md:py-2.5 text-[1.2rem] hover:opacity-90 outline-none cursor-pointer text-sm md:text-base",
  variants: {
    color: {
      primary: "text-white bg-accent",
      secondary: "text-primary bg-white",
      raw: "",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
      false:
        "data-[pressed]:scale-[0.98] duration-300 data-[hovered]:opacity-90",
    },
    isTextButton: {
      true: "font-14 bg-[transparent] p-0 text-primary-1",
    },
  },
  defaultVariants: {
    color: "primary",
    isDisabled: false,
    isTextButton: false,
    isInvalid: false,
    isPopoverButton: false,
  },
});

export function Button(props: ButtonProps) {
  const {
    children,
    variant,
    className,
    isLoading,
    loadingText,
    isDisabled,
    ...rest
  } = props;
  return (
    <RACButton
      aria-label="radio"
      {...rest}
      isDisabled={isLoading || isDisabled}
      className={({ isDisabled }) =>
        buttonStyle({
          ...variant,
          isDisabled,
          className: className as string,
        })
      }
    >
      {Boolean(props.isLoading) ? (
        <Loader loadingText={loadingText} />
      ) : (
        props.children
      )}
    </RACButton>
  );
}

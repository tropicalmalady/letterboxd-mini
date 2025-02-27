import React from "react";
import {
  ModalOverlay,
  ModalOverlayProps,
  Modal as RACModal,
} from "react-aria-components";
import { tv } from "tailwind-variants";

interface ModalProps extends ModalOverlayProps {}

export const overlayStyles = tv({
  base: [
    "fixed",
    "inset-0",
    "isolate",
    "z-20",
    "bg-primary-6/10",
    "flex",
    "items-center",
    "justify-center",
    "text-center",
    "backdrop-blur-md",
    "py-[2rem]",
    "z-[100000]",
  ],
  variants: {
    isEntering: {
      true: "animate-in fade-in duration-200 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
});

const modalStyles = tv({
  base: [
    "w-full",
    "align-middle",
    "mx-[1rem]",
    "max-h-full",
    "overflow-hidden",
    "relative",
  ],
  variants: {
    isEntering: {
      true: "animate-in zoom-in-105 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out zoom-out-95 ease-in duration-200",
    },
  },
});

export function Modal({ className, ...props }: ModalProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles} isDismissable>
      <RACModal
        {...props}
        className={({ isEntering, isExiting }) =>
          modalStyles({ className: className as string, isEntering, isExiting })
        }
      />
    </ModalOverlay>
  );
}

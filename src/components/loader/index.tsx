import React from "react";
import { ButtonProps } from "../button";

type LoaderProps = Pick<ButtonProps, "loadingText">;

export function Loader(props: LoaderProps) {
  return (
    <div className="flex justify-center items-center gap-[0.5rem]">
      <div className="coin">
        <div className="side-a"></div>
        <div className="side-b"></div>
      </div>

      <span>{props.loadingText}</span>
    </div>
  );
}

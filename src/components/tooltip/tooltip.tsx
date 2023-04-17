import React from "react";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { TooltipProps } from "./tooltip.types";
import styles from "./tooltip.module.css";

export const Tooltip = ({ children, content, className }: TooltipProps) => {
  return (
    <Tippy content={content} className={className}>
      {children}
    </Tippy>
  );
};

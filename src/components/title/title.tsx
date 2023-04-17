import React from "react";
import cx from "classnames";
import { TitleProps } from "./title.types";
import styles from "./title.module.css";

export const Title = ({ size, className, children }: TitleProps) => {
  const style = cx(styles.title, className && className);
  switch (size) {
    case 1:
      return <h1 className={style}>{children}</h1>;
    case 2:
      return <h2 className={style}>{children}</h2>;
    case 3:
      return <h3 className={style}>{children}</h3>;
    case 4:
      return <h4 className={style}>{children}</h4>;
    default:
      return <h1 className={style}>{children}</h1>;
  }
};

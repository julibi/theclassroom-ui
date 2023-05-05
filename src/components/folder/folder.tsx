import React, { useCallback, useState } from "react";
import styles from "./folder.module.css";
import Image from "next/image";
import cx from "classnames";
import { FolderProps } from "./folder.types";
import { Button } from "../button";
import classNames from "classnames";

export const Folder = ({ children, className }: FolderProps) => {
  return (
    <div className={styles.folderWrapper}>
      <div className={cx(styles.folder, className)}>{children}</div>
    </div>
  );
};

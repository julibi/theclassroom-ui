import { Folder } from "@/components/folder";
import React from "react";
import styles from "../styles/Characters.module.css";

const Characters = () => {
  console.log("first");
  return (
    <div className={styles.characters}>
      <div className={styles.folders}>
        <Folder />
        <Folder />
        <Folder />
      </div>
    </div>
  );
};

export default Characters;

import React from "react";
import cx from "classnames";
import { inter } from "@/utils/fonts";
import { Title } from "@/components/title";
import styles from "../styles/Impressum.module.css";

const impressum = () => {
  return (
    <div className={cx(styles.impressum, inter.className)}>
      <Title size={2} className={styles.impressumTitle}>
        Impressum
      </Title>
      <span className={styles.impressumItem}>Moonpage UG</span>
      <span className={styles.impressumItem}>Maacksgasse 14</span>
      <span className={styles.impressumItem}>22303 Hamburg</span>
      <span className={styles.impressumItem}>
        E-Mail: orbitretreat2023@gmail.com
      </span>
    </div>
  );
};

export default impressum;

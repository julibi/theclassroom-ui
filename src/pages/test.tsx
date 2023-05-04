import React from "react";
import { Card } from "@/components/card";
import { Title } from "@/components/title";
import cx from "classnames";
import Image from "next/image";
import styles from "../styles/Test.module.css";
import { inter } from "@/utils/fonts";
import { Button } from "@/components/button";
const Test = () => {
  return (
    <div className={cx(styles.background, inter.className)}>
      <div className={cx(styles.foreground, inter.className)}>
        <div className={styles.section}>
          <div className={styles.control}>
            <div className={styles.redCircle}></div>
            <div className={styles.titleWrapper}>
              <Title
                size={1}
                className={cx(
                  styles.title,
                  styles.skewingAnimation,
                  styles.asianTitle
                )}
              >
                退却
              </Title>
              <div className={styles.westernTitle}>
                <Title size={1} className={styles.title}>
                  THE RETREAT
                </Title>
                <Title size={4} className={styles.subtitle}>
                  The one retreat you need.
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.textInfo}>
            <div className={styles.titlesWrapper}>
              <Title size={1} className={cx(styles.title, styles.sectionTitle)}>
                Self-discovery, healing and renewal.
              </Title>
              <Title size={4} className={styles.subtitle}>
                Because you must make yourself fantastic in order to do
                fantastic things.
              </Title>
            </div>
            <Button className={styles.joinButton}>Yes, please</Button>
          </div>
          <div className={styles.statsInfo}>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                93%
              </Title>
              <Title size={4} className={styles.subtitle}>
                beings suffering mentally
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                120
              </Title>
              <Title size={4} className={styles.subtitle}>
                yearly patients
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                125
              </Title>
              <Title size={4} className={styles.subtitle}>
                yearly healed patients
              </Title>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <Title size={1} className={cx(styles.title, styles.sectionTitle)}>
            What is The Retreat?
          </Title>
        </div>
      </div>
    </div>
  );
};

export default Test;

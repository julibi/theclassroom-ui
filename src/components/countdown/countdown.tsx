import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";
import { CountdownProps } from "./countdown.types";
import { Title } from "../title";

import styles from "./countdown.module.css";

export const Countdown = ({ endTime, className }: CountdownProps) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const timeDifference = endTime - currentTime;
      setRemainingTime(timeDifference);

      if (timeDifference <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endTime]);

  const timeObject = useMemo(() => {
    const days = Math.floor(remainingTime / 86400);
    const hours = Math.floor((remainingTime % 86400) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return { days, hours, minutes, seconds };
  }, [remainingTime]);

  return (
    <div className={cx(styles.countdown, className)}>
      <div className={styles.timeCard}>
        <span className={styles.timeUnit}>days</span>
        <Title size={2} className={styles.time}>
          {timeObject.days}
        </Title>
      </div>
      <div className={styles.timeCard}>
        <span className={styles.timeUnit}>hours</span>
        <Title size={2} className={styles.time}>
          {timeObject.hours}
        </Title>
      </div>
      <div className={styles.timeCard}>
        <span className={styles.timeUnit}>minutes</span>
        <Title size={2} className={styles.time}>
          {timeObject.minutes}
        </Title>
      </div>
      <div className={styles.timeCard}>
        <span className={styles.timeUnit}>seconds</span>
        <Title size={2} className={styles.time}>
          {timeObject.seconds}
        </Title>
      </div>
    </div>
  );
};

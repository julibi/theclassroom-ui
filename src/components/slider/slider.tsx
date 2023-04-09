import React, { useCallback, useState } from "react";
import styles from "./slider.module.css";
import cx from "classnames";
import { useSlider } from "@/hooks/use-slider";
import { Button } from "../button";

export const Slider = () => {
  const { isSliderOpen, openSlider, closeSlider } = useSlider();

  const toggleSlider = useCallback(() => {
    isSliderOpen ? closeSlider() : openSlider();
  }, [isSliderOpen, closeSlider, openSlider]);

  return (
    <div
      className={cx(styles.slider, {
        [styles.slideIn]: isSliderOpen,
        [styles.slideOut]: !isSliderOpen,
      })}
    >
      <div className={styles.content}>
        <Button onClick={toggleSlider} className={styles.closeButton}>
          x
        </Button>
      </div>
    </div>
  );
};

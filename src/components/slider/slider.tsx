import cx from "classnames";
import React, { useCallback } from "react";
import styles from "./slider.module.css";
import { useSlider } from "@/hooks/use-slider";
import { Button } from "../button";
import { Title } from "../title";
import { useUser } from "@/hooks/use-user";

export const Slider = () => {
  const { isSliderOpen, openSlider, closeSlider } = useSlider();
  const { ids } = useUser();

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

        <div className={styles.nftList}>
          <Title size={3} className={styles.title}>
            Your NFTs
          </Title>
          {ids?.map((id, idx) => (
            <Button className={styles.nft} key={idx}>{`# ${id}`}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

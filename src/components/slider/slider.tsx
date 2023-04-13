import cx from "classnames";
import React, { useCallback } from "react";
import styles from "./slider.module.css";
import { useSlider } from "@/hooks/use-slider";
import { Button } from "../button";
import { Title } from "../title";
import { useUser } from "@/hooks/use-user";
import { useCharacters } from "@/hooks/use-characters";

export const Slider = () => {
  const { isSliderOpen, openSlider, closeSlider } = useSlider();
  const { NFTs } = useUser();
  const { characters } = useCharacters();

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
          <div>
            {NFTs?.map(({ id, characterId, written }) => {
              const characterName = characters
                ? characters[characterId - 1]?.name
                : null;

              return (
                <Button
                  className={cx(styles.nft, written && styles.grey)}
                  key={id}
                >
                  <span className={styles.blockSpan}>{`# ${id}`}</span>
                  <span
                    className={styles.blockSpan}
                  >{`Character: ${characterName}`}</span>
                  <span className={styles.blockSpan}>
                    {written ? "Written" : "Unwritten"}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

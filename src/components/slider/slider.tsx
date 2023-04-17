import cx from "classnames";
import React, { useCallback } from "react";
import styles from "./slider.module.css";
import { useUI } from "@/hooks/use-ui";
import { Button } from "../button";
import { Title } from "../title";
import { useUser } from "@/hooks/use-user";
import { useCharacters } from "@/hooks/use-characters";
import { Minting } from "../minting";

export const Slider = () => {
  const { isSliderOpen, openSlider, closeSlider, updateIndex, updateScrollId } =
    useUI();
  const { NFTs } = useUser();
  const { characters } = useCharacters();

  const toggleSlider = useCallback(() => {
    isSliderOpen ? closeSlider() : openSlider();
  }, [isSliderOpen, closeSlider, openSlider]);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const handleClickNFT = useCallback(
    async (characterId: number) => {
      if (characters?.[characterId - 1] === undefined) return;

      // TODO: if not on home, navigate to home
      updateIndex(characterId - 1);
      closeSlider();
      await delay(500);
      updateScrollId(characterId);
    },
    [updateIndex]
  );

  return (
    <div
      className={cx(styles.slider, {
        [styles.slideIn]: isSliderOpen,
        [styles.slideOut]: !isSliderOpen,
      })}
    >
      <div className={styles.outsideClickCatcher} onClick={closeSlider}></div>
      <div className={styles.content}>
        <Button onClick={toggleSlider} className={styles.closeButton}>
          x
        </Button>
        <div className={styles.nftList}>
          <Title size={3} className={styles.title}>
            Mint to participate in writing!
          </Title>
          <Minting />
          <Title size={3} className={styles.title}>
            NFTs
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
                  onClick={() => handleClickNFT(characterId)}
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

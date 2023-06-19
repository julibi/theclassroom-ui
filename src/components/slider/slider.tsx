import cx from "classnames";
import React, { useCallback } from "react";
import { inter } from "@/utils/fonts";
import styles from "./slider.module.css";
import { useUI } from "@/hooks/use-ui";
import { Button } from "../button";
import { Title } from "../title";
import { useUser } from "@/hooks/use-user";
import { useCharacters } from "@/hooks/use-characters";
import { Minting } from "../minting";
import { useRouter } from "next/router";

export const Slider = () => {
  const router = useRouter();
  const { isSliderOpen, openSlider, closeSlider, updateIndex } = useUI();
  const { NFTs, fetchNFTs } = useUser();
  const { characters } = useCharacters();
  const toggleSlider = useCallback(() => {
    isSliderOpen ? closeSlider() : openSlider();
  }, [isSliderOpen, closeSlider, openSlider]);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleClickNFT = useCallback(
    async (characterId: number) => {
      if (characters?.[characterId - 1] === undefined) return;

      updateIndex(characterId - 1);
      closeSlider();
      await delay(500);
    },
    [characters, closeSlider, updateIndex]
  );

  // TODO: just for now
  if (!isSliderOpen) {
    return null;
  }

  return (
    <div
      className={cx(styles.slider, inter.className, {
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
          <Title size={1} className={styles.title}>
            Mint to participate in writing!
          </Title>
          <Minting />
          <Title size={1} className={styles.title}>
            NFTs
          </Title>
          <div>
            {NFTs && !!NFTs.length ? (
              NFTs.map(({ id, characterId, written }) => {
                const characterName = characters
                  ? characters[characterId - 1]?.name
                  : null;

                return (
                  <Button
                    className={cx(styles.nft, written && styles.grey)}
                    key={id}
                    onClick={() => handleClickNFT(characterId)}
                    disabled={router?.route !== "/writingapp"}
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
              })
            ) : (
              <>
                <span className={styles.refetchText}>
                  Not seeing your NFTs? Sorry, try refetching them.
                </span>
                <Button className={styles.nft} onClick={fetchNFTs}>
                  Refetch
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

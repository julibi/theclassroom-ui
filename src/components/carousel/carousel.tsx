import React, { useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { useUI } from "@/hooks/use-ui";
import { Button } from "../button";
import { CarouselSlide } from "../carousel-slide";
import { CharacterItem } from "@/providers/charactersProvider/charactersProvider.types";
import styles from "./carousel.module.css";
import { CarouselProps } from "./carousel.types";

export const Carousel = ({ characters }: CarouselProps) => {
  const getRandomArbitrary = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const { activeIndex, updateIndex, shouldShuffle } = useUI();
  const totalIndex = useMemo(() => {
    return characters?.length ? characters?.length - 1 : 10;
  }, [characters]);
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      activeIndex === 0 ? updateIndex(9) : updateIndex(activeIndex - 1);
    },
    onSwipedRight: () => {
      activeIndex === totalIndex
        ? updateIndex(0)
        : updateIndex(activeIndex + 1);
    },
  });

  useEffect(() => {
    if (!shouldShuffle) return;
    const randomCharacterToShow = getRandomArbitrary(0, totalIndex);
    updateIndex(randomCharacterToShow);
  }, [shouldShuffle, totalIndex, updateIndex]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} {...handlers}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {characters?.map((character: CharacterItem, idx: number) => (
            <div
              key={idx}
              className={styles.carouselItem}
              style={{ width: "100%" }}
            >
              <CarouselSlide character={character} characterId={idx + 1} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          className={styles.previousButton}
          onClick={() => {
            activeIndex === 0 ? updateIndex(9) : updateIndex(activeIndex - 1);
          }}
        >
          {"<"}
        </Button>
        <Button
          className={styles.nextButton}
          onClick={() => {
            activeIndex === totalIndex
              ? updateIndex(0)
              : updateIndex(activeIndex + 1);
          }}
        >
          {">"}
        </Button>
      </div>
    </div>
  );
};

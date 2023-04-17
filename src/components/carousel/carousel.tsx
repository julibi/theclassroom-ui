import React, { useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { useUI } from "@/hooks/use-ui";
import { Button } from "../button";
import { CarouselSlide } from "../carousel-slide";
import { CharacterItem } from "@/providers/charactersProvider/charactersProvider.types";
import styles from "./carousel.module.css";
import { CarouselProps } from "./carousel.types";

export const Carousel = ({ characters }: CarouselProps) => {
  const { activeIndex, updateIndex } = useUI();
  const totalIndex = useMemo(() => {
    return characters?.length ? characters?.length - 1 : 10;
  }, [characters]);
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      activeIndex < totalIndex && updateIndex(activeIndex + 1),
    onSwipedRight: () => activeIndex > 1 && updateIndex(activeIndex - 1),
  });

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
          onClick={() => updateIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
        >
          <ArrowBack />
        </Button>
        <Button
          className={styles.nextButton}
          onClick={() => updateIndex(activeIndex + 1)}
          disabled={activeIndex === totalIndex}
        >
          <ArrowForward />
        </Button>
      </div>
    </div>
  );
};

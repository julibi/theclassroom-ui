import React, { useCallback, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./carousel.module.css";
import { CarouselProps } from "./carousel.types";
import { Button } from "../button";
import { CharacterItem } from "@/providers/charactersProvider/charactersProvider.types";
import { CharacterCard } from "../character-card";
import { CharacterSnippets } from "../character-snippets";

export const Carousel = ({ characters }: CarouselProps) => {
  const totalIndex = useMemo(() => {
    return characters?.length || 9;
  }, [characters]);

  const [activeIndex, setActiveIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  const updateIndex = useCallback(
    (newIndex: number) => {
      if (newIndex < 0) {
        newIndex = totalIndex;
      } else if (newIndex >= totalIndex) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    },
    [activeIndex]
  );
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
              <div className={styles.carouselItemInner}>
                <CharacterCard
                  character={character}
                  className={styles.character}
                />
                <CharacterSnippets characterId={idx + 1} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          className={styles.previousButton}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          {"<"}
        </Button>
        <Button
          className={styles.nextButton}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          {">"}
        </Button>
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import styles from "./carousel-slide.module.css";
import { CarouselSlideProps } from "./carousel-slide.types";
import { CharacterCard } from "../character-card";
import { CharacterSnippets } from "../character-snippets";
import { WritingBox } from "../writing-box";
import { Button } from "../button";
import { ArrowDownward } from "@material-ui/icons";

export const CarouselSlide = ({
  character,
  characterId,
}: CarouselSlideProps) => {
  const lastTextRef = useRef(null);
  const executeScroll = () =>
    // @ts-ignore
    lastTextRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  return (
    <div className={styles.carouselItemInner}>
      <CharacterCard character={character} className={styles.character} />
      <Button className={styles.scrollToLastButton} onClick={executeScroll}>
        <span className={styles.scrollToLastText}>
          Scroll to last text of character
        </span>
        <div>
          <ArrowDownward />
        </div>
      </Button>
      <CharacterSnippets characterId={characterId} />
      <div ref={lastTextRef} />
      <WritingBox characterId={characterId} />
    </div>
  );
};

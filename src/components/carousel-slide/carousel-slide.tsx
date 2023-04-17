import React, { useEffect, useRef } from "react";
import { useUI } from "@/hooks/use-ui";
import { ArrowDownward } from "@material-ui/icons";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";
import { CarouselSlideProps } from "./carousel-slide.types";
import { CharacterCard } from "../character-card";
import { CharacterSnippets } from "../character-snippets";
import { WritingBox } from "../writing-box";
import { Button } from "../button";
import styles from "./carousel-slide.module.css";

export const CarouselSlide = ({
  character,
  characterId,
}: CarouselSlideProps) => {
  const { scrollId, updateScrollId } = useUI();
  const { characterSnippets } = useCharacterSnippets({ characterId });
  const lastTextRef = useRef(null);
  const executeScroll = () => {
    // @ts-ignore
    lastTextRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollId === characterId) {
      executeScroll();
      updateScrollId(null);
    }
  }, [scrollId]);

  return (
    <div className={styles.carouselItemInner}>
      <CharacterCard character={character} className={styles.character} />
      {characterSnippets?.length > 1 ? (
        <Button className={styles.scrollToLastButton} onClick={executeScroll}>
          <span className={styles.scrollToLastText}>Scroll to last text</span>
          <div>
            <ArrowDownward />
          </div>
        </Button>
      ) : (
        ""
      )}
      <CharacterSnippets characterId={characterId} />
      <div ref={lastTextRef} />
      <WritingBox characterId={characterId} />
    </div>
  );
};

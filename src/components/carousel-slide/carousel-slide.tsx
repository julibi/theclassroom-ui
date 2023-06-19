import React, { useEffect, useRef } from "react";
import { useUI } from "@/hooks/use-ui";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";
import { CarouselSlideProps } from "./carousel-slide.types";
import { CharacterCard } from "../character-card";
import { WritingBox } from "../writing-box";
import { Button } from "../button";
import styles from "./carousel-slide.module.css";
import { TextCard } from "../text-card";
import { TEXTS_TO_HIDE } from "@/constants";

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
  }, [characterId, scrollId, updateScrollId]);

  return (
    <div className={styles.carouselItemInner}>
      <CharacterCard
        characterId={characterId}
        character={character}
        className={styles.character}
      />

      {characterSnippets?.length > 1 ? (
        <Button className={styles.scrollToLastButton} onClick={executeScroll}>
          <span className={styles.scrollToLastText}>Scroll to first text</span>
        </Button>
      ) : (
        ""
      )}
      <WritingBox characterId={characterId} />
      {characterSnippets?.length > 0 && (
        <div>
          {characterSnippets?.map((snippet, idx) => {
            if (TEXTS_TO_HIDE.includes(snippet.tokenId)) return null;
            if (idx === characterSnippets.length - 1) {
              return (
                <>
                  <div ref={lastTextRef} />
                  <TextCard snippet={snippet} key={idx} id={snippet.tokenId} />
                </>
              );
            }
            return (
              <TextCard snippet={snippet} key={idx} id={snippet.tokenId} />
            );
          })}
        </div>
      )}
    </div>
  );
};

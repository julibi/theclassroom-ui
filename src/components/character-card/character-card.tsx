import React, { useMemo, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import styles from "./character-card.module.css";
import { CharacterCardProps } from "./character-card.types";
import { Title } from "../title";
import Skeleton from "react-loading-skeleton";
import { detectLanguage } from "@/utils/detectLanguage";
import { Toggle } from "../toggle";

export const CharacterCard = ({
  characterId,
  character,
  className,
}: CharacterCardProps) => {
  const [showOriginal, setShowOriginal] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const hasTranslation = useMemo(() => {
    return !!character?.translation;
  }, [character]);

  return (
    <div className={cx(styles.characterCard, className)}>
      <div className={styles.mainData}>
        <div className={styles.imageWrapper}>
          <div className={styles.redFilter} />
          <Image
            className={styles.image}
            src={`/characters/${character?.img}.jpeg`}
            alt={`Image of ${character.name}`}
            priority
            height={120}
            width={120}
          />
        </div>
        <div className={styles.info}>
          <Title size={3} className={styles.title}>
            {character.name}
          </Title>
          <span
            className={styles.infoLine}
          >{`Reference: #${character.id}`}</span>
          <span
            className={styles.infoLine}
          >{`Birth date: ${character.birthDate}`}</span>
          <span
            className={styles.infoLine}
          >{`Birth place: ${character.birthPlace}`}</span>
          <span
            className={styles.infoLine}
          >{`Check In Type: ${character.checkIn}`}</span>
        </div>
      </div>

      {!showOriginal && hasTranslation ? (
        <span
          className={cx(
            styles.text,
            isExpanded ? styles.expanded : styles.collapsed
          )}
        >
          {character?.translation ?? (
            <Skeleton count={3} className={styles.skeleton} />
          )}
        </span>
      ) : (
        <span
          className={cx(
            styles.text,
            isExpanded ? styles.expanded : styles.collapsed
          )}
        >
          {character?.text ?? (
            <Skeleton count={3} className={styles.skeleton} />
          )}
        </span>
      )}

      <span
        onClick={() => setIsExpanded(isExpanded ? false : true)}
        className={styles.readMoreLink}
      >
        {isExpanded ? "Read Less" : "Read All"}
      </span>

      {hasTranslation && (
        <Toggle
          className={styles.languageToggle}
          onChange={() => setShowOriginal(!showOriginal)}
          label={`Orig. language: ${
            detectLanguage(character?.text as string) ?? ""
          }`}
          isChecked={showOriginal}
        />
      )}
    </div>
  );
};

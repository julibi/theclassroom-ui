import React, { useMemo, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import styles from "./character-card.module.css";
import { CharacterCardProps } from "./character-card.types";
import { Title } from "../title";
import { CHARACTERS } from "@/constants";
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
  const characterData = useMemo(
    () => CHARACTERS.find((c) => c.id == characterId),
    [characterId]
  );
  const hasTranslation = useMemo(() => {
    return !!characterData?.translation;
  }, [characterData]);

  return (
    <div className={cx(styles.characterCard, className)}>
      <div className={styles.mainData}>
        <div className={styles.imageWrapper}>
          <div className={styles.redFilter} />
          <Image
            className={styles.image}
            src={`/characters/${characterData?.img}.jpeg`}
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
          >{`Reference: #${characterId}`}</span>
          <span
            className={styles.infoLine}
          >{`Birth date: ${characterData?.birthDate}`}</span>
          <span
            className={styles.infoLine}
          >{`Birth place: ${characterData?.birthPlace}`}</span>
          <span
            className={styles.infoLine}
          >{`Check In Type: ${characterData?.checkIn}`}</span>
        </div>
      </div>

      {!showOriginal && hasTranslation ? (
        <span
          className={cx(
            styles.text,
            isExpanded ? styles.expanded : styles.collapsed
          )}
        >
          {characterData?.translation ?? (
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
          {characterData?.text ?? (
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
            detectLanguage(characterData?.text as string) ?? ""
          }`}
          isChecked={showOriginal}
        />
      )}
    </div>
  );
};

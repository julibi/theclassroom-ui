import React, { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import styles from "./character-card.module.css";
import { CharacterCardProps } from "./character-card.types";
import { Title } from "../title";
import { CHARACTERS } from "@/constants";

export const CharacterCard = ({
  characterId,
  character,
  className,
}: CharacterCardProps) => {
  const [text, setText] = useState<null | string>();
  const [pending, setPending] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const fetchText = useCallback(async () => {
    setPending(true);
    try {
      // TODO: first try to fetch from my pinata gate?
      const response = await fetch(
        `https://ipfs.io/ipfs/${character?.textIpfsHash}`
      );
      if (response.ok) {
        const fetchedText = await response.text();
        setText(fetchedText);
        setPending(false);
      }
    } catch (e: unknown) {
      setPending(false);
    }
  }, [character]);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  const characterData = useMemo(
    () => CHARACTERS.find((c) => c.id == characterId),
    [characterId]
  );

  return (
    <div className={cx(styles.characterCard, className)}>
      <div className={styles.mainData}>
        <div className={styles.imageWrapper}>
          <div className={styles.redFilter} />
          <Image
            className={styles.image}
            src={`/characters/${characterData?.name}.jpeg`}
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
      {/* <span className={styles.text}>{text}</span> */}

      <span
        className={cx(
          styles.text,
          isExpanded ? styles.expanded : styles.collapsed
        )}
      >
        {characterData?.text}
      </span>
      <span
        onClick={() => setIsExpanded(isExpanded ? false : true)}
        className={styles.readMoreLink}
      >
        {isExpanded ? "Read Less" : "Read All"}
      </span>
    </div>
  );
};

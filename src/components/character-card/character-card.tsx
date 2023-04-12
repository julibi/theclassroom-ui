import React, { useCallback, useEffect, useState } from "react";
import cx from "classnames";
import styles from "./character-card.module.css";
import { CharacterCardProps } from "./character-card.types";
import { Title } from "../title";

export const CharacterCard = ({ character, className }: CharacterCardProps) => {
  const [text, setText] = useState<null | string>();
  const [pending, setPending] = useState<boolean>(false);
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

  return (
    <div className={cx(styles.characterCard, className)}>
      <Title size={3} className={styles.title}>
        {character.name}
      </Title>
      <span>{text}</span>
    </div>
  );
};

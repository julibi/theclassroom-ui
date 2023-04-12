import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./text-card.module.css";
import { TextCardProps } from "./text-card.types";
import { ProfileLink } from "../profile-link";
import { Button } from "../button";

export const TextCard = ({ snippet }: TextCardProps) => {
  const [text, setText] = useState<null | string>();
  const [pending, setPending] = useState<boolean>(false);
  const created = useMemo(
    () =>
      new Date(Number(snippet?.writtenAt) * 1000).toLocaleDateString("en-US"),
    [snippet?.writtenAt]
  );
  const fetchText = useCallback(async () => {
    setPending(true);
    try {
      // TODO: first try to fetch from my pinata gate?
      const response = await fetch(
        `https://ipfs.io/ipfs/${snippet?.textIPFSHash}`
      );
      if (response.ok) {
        const fetchedText = await response.text();
        setText(fetchedText);
        setPending(false);
      }
    } catch (e: unknown) {
      setPending(false);
    }
  }, [snippet?.textIPFSHash]);

  useEffect(() => {
    fetchText();
  }, [fetchText]);

  return (
    <div className={styles.textCard}>
      <span className={styles.text}>{text}</span>
      <span className={styles.tokenId}>{`# ${snippet.tokenId}`}</span>
      <div className={styles.meta}>
        <ProfileLink address={snippet?.writer} />
        <span className={styles.writtenAt}>{`Written: ${created}`}</span>
      </div>
    </div>
  );
};

import React, { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import styles from "./text-card.module.css";
import { TextCardProps } from "./text-card.types";
import { ProfileLink } from "../profile-link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  MOONPAGE_COLLECTION_ADDRESS_DEV,
  MOONPAGE_COLLECTION_ADDRESS_PROD,
  PINATA_GATE_URI,
} from "@/constants";
import { Toggle } from "../toggle";
import { detectLanguage } from "@/utils/detectLanguage";

export const TextCard = ({ snippet }: TextCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [text, setText] = useState<null | string>(null);
  const [textPending, setTextPending] = useState<boolean>(false);
  const [translationPending, setTranslationPending] = useState<boolean>(false);
  const [translation, setTranslation] = useState<null | string>(null);
  const [showOriginal, setShowOriginal] = useState<boolean>(false);

  const created = useMemo(
    () =>
      new Date(Number(snippet?.writtenAt) * 1000).toLocaleDateString("en-US"),
    [snippet?.writtenAt]
  );
  const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT == "PROD";
  const hasTranslation = useMemo(() => {
    return snippet?.translationIPFSHash.length > 0;
  }, [snippet?.translationIPFSHash]);
  const OpenseaLink = useMemo(
    () =>
      `https://${isProd ? "" : "testnets."}opensea.io/assets/${
        isProd ? "matic" : "mumbai"
      }/${
        isProd
          ? MOONPAGE_COLLECTION_ADDRESS_PROD
          : MOONPAGE_COLLECTION_ADDRESS_DEV
      }/${snippet.tokenId}`,
    [isProd, snippet.tokenId]
  );
  const fetchText = useCallback(async () => {
    setTextPending(true);
    try {
      // TODO: first try to fetch from my pinata gate?
      const response = await fetch(
        `https://ipfs.io/ipfs/${snippet?.textIPFSHash}`
      );
      if (response.ok) {
        const fetchedText = await response.text();
        setText(fetchedText);
        setTextPending(false);
      }
    } catch (e: unknown) {
      setTextPending(false);
    }
  }, [snippet?.textIPFSHash]);

  const fetchTranslation = useCallback(async () => {
    // translation does not always exist
    if (snippet?.translationIPFSHash?.length === 0) return;
    setTranslationPending(true);
    try {
      // TODO: first try to fetch from my pinata gate?
      const response = await fetch(
        `https://ipfs.io/ipfs/${snippet?.translationIPFSHash}`
      );

      if (response.ok) {
        const fetchedText = await response.text();
        setTranslation(fetchedText);
        setTranslationPending(false);
      }
    } catch (e: unknown) {
      setTranslationPending(false);
    }
  }, [snippet]);

  useEffect(() => {
    fetchText();
    fetchTranslation();
  }, [fetchText, fetchTranslation]);

  return (
    <div className={styles.textCard}>
      {!showOriginal && hasTranslation ? (
        <span
          className={cx(
            styles.text,
            isExpanded ? styles.expanded : styles.collapsed
          )}
        >
          {translation?.length ? (
            translation
          ) : (
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
          {text ? text : <Skeleton count={3} className={styles.skeleton} />}
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
          label={`Orig. language: ${detectLanguage(text as string) ?? ""}`}
          isChecked={showOriginal}
        />
      )}
      <span className={styles.tokenId}>
        <a
          href={OpenseaLink}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {`# ${snippet.tokenId}`}
        </a>
      </span>
      <div className={styles.meta}>
        <span className={styles.writtenAt}>{`Written At: ${created}`}</span>
        <div className={styles.flex}>
          <div className={styles.by}>By </div>
          <ProfileLink address={snippet?.writer} />
        </div>
      </div>
    </div>
  );
};

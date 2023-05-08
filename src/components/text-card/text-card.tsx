import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./text-card.module.css";
import { TextCardProps } from "./text-card.types";
import { ProfileLink } from "../profile-link";
import { useContractRead } from "wagmi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  MOONPAGE_COLLECTION_ADDRESS_DEV,
  MOONPAGE_COLLECTION_ADDRESS_PROD,
} from "@/constants";
import ABI from "../../abis/MoonpageCollection.json";

export const TextCard = ({ snippet }: TextCardProps) => {
  const [text, setText] = useState<null | string>();
  const [pending, setPending] = useState<boolean>(false);
  const { data: tokenOwner } = useContractRead({
    address: MOONPAGE_COLLECTION_ADDRESS_DEV,
    abi: ABI,
    functionName: "ownerOf",
    args: [snippet.tokenId],
  });

  const created = useMemo(
    () =>
      new Date(Number(snippet?.writtenAt) * 1000).toLocaleDateString("en-US"),
    [snippet?.writtenAt]
  );
  const isProd = process.env.ENVIRONMENT == "PROD";
  const OpenseaLink = useMemo(
    () =>
      `https://${isProd ? "" : "testnets."}opensea.io/assets/${
        isProd ? "matic" : "mumbai"
      }/${
        isProd
          ? MOONPAGE_COLLECTION_ADDRESS_PROD
          : MOONPAGE_COLLECTION_ADDRESS_DEV
      }/${snippet.tokenId}`,
    [snippet?.tokenId]
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
      <span className={styles.text}>
        {text?.length ? (
          text
        ) : (
          <Skeleton count={3} className={styles.skeleton} />
        )}
      </span>
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

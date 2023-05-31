import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { Button } from "../button";
import { Modal } from "../modal/modal";
import { Title } from "../title";
import { Folder } from "../folder";
import { PatientRecordProps } from "./patient-record.types";
import styles from "./patient-record.module.css";
import { useRouter } from "next/router";
import { useUI } from "@/hooks/use-ui";

export const PatientRecord = ({
  name,
  id,
  birthDate,
  birthPlace,
  checkIn,
  img,
  translationIpfsHash,
  withPic = false,
  withButton = false,
}: PatientRecordProps) => {
  console.log({ translationIpfsHash });
  const router = useRouter();
  const { updateIndex } = useUI();
  const [translation, setTranslation] = useState<null | string>(null);
  const [showFile, setShowFile] = useState(false);
  const openFile = () => {
    setShowFile(true);
  };

  const toApp = useCallback(() => {
    router?.push("writingapp");
    updateIndex(id);
  }, [router, updateIndex, id]);

  const fetchTranslation = useCallback(async () => {
    try {
      // TODO: first try to fetch from my pinata gate?
      const response = await fetch(
        `https://ipfs.io/ipfs/${translationIpfsHash}`
      );
      if (response.ok) {
        const fetchedText = await response.text();
        setTranslation(fetchedText);
      }
    } catch (e: unknown) {
      // do nothing
    }
  }, [translationIpfsHash]);

  useEffect(() => {
    if (translationIpfsHash) {
      fetchTranslation();
    }
  }, [fetchTranslation, translationIpfsHash]);

  return (
    <>
      <Folder>
        {withPic && (
          <div className={styles.imageWrapper}>
            <div className={styles.redFilter} />
            <Image
              className={styles.image}
              src={`/characters/${img}.jpeg`}
              alt={`Image of ${name}`}
              priority
              height={120}
              width={120}
            />
          </div>
        )}
        <div className={styles.info}>
          <div>
            <span
              onClick={toApp}
              className={cx(
                styles.infoLine,
                styles.bold,
                styles.underline,
                styles.marginBottom,
                styles.linkish
              )}
            >
              {name}
            </span>
            <span className={styles.infoLine}>{`Reference: #${id}`}</span>
            <span
              className={styles.infoLine}
            >{`Birth date: ${birthDate}`}</span>
            <span
              className={styles.infoLine}
            >{`Birth place: ${birthPlace}`}</span>
            <span
              className={styles.infoLine}
            >{`Check In Type: ${checkIn}`}</span>
          </div>
          {withButton && (
            <Button
              onClick={openFile}
              text={`Read File #${id}`}
              className={styles.openFileButton}
            />
          )}
        </div>
      </Folder>
      {showFile && (
        <Modal
          onClose={() => setShowFile(false)}
          focusClassName={styles.focusClass}
          contentClassName={styles.contentClass}
        >
          <div className={styles.recordContent}>
            <Title
              size={2}
              className={cx(styles.infoLine, styles.bold, styles.marginBottom)}
            >
              {name}
            </Title>
            <div className={styles.flexColumn}>
              <span className={styles.infoLine}>{`Reference: #${id}`}</span>
              <span
                className={styles.infoLine}
              >{`Birth date: ${birthDate}`}</span>
              <span
                className={styles.infoLine}
              >{`Birth place: ${birthPlace}`}</span>
              <span
                className={styles.infoLine}
              >{`Check In Type: ${checkIn}`}</span>
            </div>
            <p className={styles.infoLine}>{translation}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

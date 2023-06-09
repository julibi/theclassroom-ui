import React, { useCallback, useMemo, useState } from "react";
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
import { CHARACTERS } from "@/constants";

export const PatientRecord = ({
  name,
  id,
  birthDate,
  birthPlace,
  checkIn,
  img,
  withPic = false,
  withButton = false,
}: PatientRecordProps) => {
  const router = useRouter();
  const { updateIndex, updateShouldShuffle } = useUI();
  const [showFile, setShowFile] = useState(false);
  const openFile = () => {
    setShowFile(true);
  };
  const characterData = useMemo(() => CHARACTERS.find((c) => c.id == id), [id]);

  const toApp = useCallback(() => {
    updateShouldShuffle(false);
    router?.push("writingapp");
    // coz activeId is not same as characterId, shifted by one
    const newIndex = id === 0 ? 9 : id - 1;
    updateIndex(newIndex);
  }, [router, updateIndex, updateShouldShuffle, id]);

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
            <p className={styles.infoLine}>
              {characterData?.translation ?? characterData?.text ?? ""}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

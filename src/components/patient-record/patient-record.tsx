import React, { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { Button } from "../button";
import { Modal } from "../modal/modal";
import { Title } from "../title";
import { Folder } from "../folder";
import { PatientRecordProps } from "./patient-record.types";
import styles from "./patient-record.module.css";

export const PatientRecord = ({
  name,
  id,
  birthDate,
  birthPlace,
  checkIn,
  text,
  withPic = false,
  withButton = false,
}: PatientRecordProps) => {
  const [showFile, setShowFile] = useState(false);
  const openFile = () => {
    setShowFile(true);
  };
  return (
    <>
      <Folder>
        {withPic && (
          <div className={styles.imageWrapper}>
            <div className={styles.redFilter} />
            <Image
              className={styles.image}
              src={`/characters/${name}.jpeg`}
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
              className={cx(
                styles.infoLine,
                styles.bold,
                styles.underline,
                styles.marginBottom
              )}
            >
              {name}
            </span>
            <span className={styles.infoLine}>{`Reference number: ${id}`}</span>
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
              <span
                className={styles.infoLine}
              >{`Reference number: ${id}`}</span>
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
            <p className={styles.infoLine}>{text}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

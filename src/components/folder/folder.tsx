import React, { useCallback, useState } from "react";
import styles from "./folder.module.css";
import Image from "next/image";
import cx from "classnames";
import { FolderProps } from "./folder.types";
import { Button } from "../button";
import { Modal } from "../modal/modal";
import { Title } from "../title";

export const Folder = ({
  name,
  id,
  birthDate,
  birthPlace,
  checkIn,
  text,
}: FolderProps) => {
  const [showFile, setShowFile] = useState(false);
  const openFile = () => {
    setShowFile(true);
  };
  return (
    <>
      <div className={styles.folderWrapper}>
        <div className={styles.folder}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              height={150}
              width={120}
              src={`/characters/${name}.jpeg`}
              alt={`Image of ${name}`}
              priority
            />
          </div>
          <div className={styles.info}>
            <div>
              <span
                className={cx(
                  styles.infoLine,
                  styles.bold,
                  styles.marginBottom
                )}
              >
                {name}
              </span>
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
            <Button onClick={openFile} text={`Read File #${id}`} />
          </div>
        </div>
      </div>
      {showFile && (
        <Modal
          onClose={() => setShowFile(false)}
          focusClassName={styles.focusClass}
          contentClassName={styles.contentClass}
        >
          <div>
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

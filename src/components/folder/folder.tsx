import React, { useCallback, useState } from "react";
import styles from "./folder.module.css";
import Image from "next/image";
import cx from "classnames";
import { FolderProps } from "./folder.types";
import { Button } from "../button";
import { Modal } from "../modal/modal";

export const Folder = ({
  name,
  id,
  birthDate,
  birthPlace,
  checkIn,
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
              src={"/characters/Neela.jpeg"}
              alt={"Image of Neela"}
              priority
            />
          </div>
          <div className={styles.info}>
            <span
              className={cx(styles.infoLine, styles.bold, styles.marginBottom)}
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
            <Button onClick={openFile} text={`Read File #${id}`} />
          </div>
        </div>
      </div>
      {showFile && (
        <Modal onClose={() => setShowFile(false)}>
          <div className={styles.characterModal}>
            Modal
            <div>Modal</div>
            <div>Modal</div>
            <div>Modal</div>
            <div>Modal</div>
            <div>Modal</div>
            <div>Modal</div>
          </div>
        </Modal>
      )}
    </>
  );
};

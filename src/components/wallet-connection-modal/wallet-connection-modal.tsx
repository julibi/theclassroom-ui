import React, { useCallback } from "react";
import Image from "next/image";
import { Modal } from "../modal/modal";
import styles from "./wallet-connection-modal.module.css";
import { WalletConnectionModalProps } from "./wallet-connection-modal.types";
import { Button } from "../button";

export const WalletConnectionModal = ({
  onClose,
}: WalletConnectionModalProps) => {
  const handleConnect = useCallback(() => {}, []);
  return (
    <Modal onClose={onClose}>
      <div className={styles.content}>
        <Button className={styles.connector} onClick={handleConnect}>
          <Image
            src="/MetaMask.png"
            height={30}
            width={30}
            alt="MetaMask"
            priority
          />
          <div>MetaMask</div>
        </Button>
      </div>
    </Modal>
  );
};

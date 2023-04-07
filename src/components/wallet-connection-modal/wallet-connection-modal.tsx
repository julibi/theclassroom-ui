import React from "react";
import { Modal } from "../modal/modal";
import styles from "./wallet-connection-modal.module.css";
import { WalletConnectionModalProps } from "./wallet-connection-modal.types";

export const WalletConnectionModal = ({
  onClose,
}: WalletConnectionModalProps) => {
  return (
    <Modal onClose={onClose}>
      <div>WalletConnectionModal</div>
    </Modal>
  );
};

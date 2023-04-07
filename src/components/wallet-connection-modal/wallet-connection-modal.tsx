import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useSwitchNetwork } from "wagmi";
import { utils } from "ethers";
import { connect } from "@wagmi/core";
import { Modal } from "../modal/modal";
import styles from "./wallet-connection-modal.module.css";
import {
  Connector,
  WalletConnectionModalProps,
} from "./wallet-connection-modal.types";
import { Button } from "../button";
import {
  injectedConnector,
  coinbaseConnector,
  walletConnectConnector,
} from "@/providers/wagmiProvider/wagmiProvider";
import { connectors } from "@/constants";

export const WalletConnectionModal = ({
  onClose,
}: WalletConnectionModalProps) => {
  const [connectError, setConnectError] = useState("");
  const { error: switchError, switchNetwork } = useSwitchNetwork();
  const networkSwitch = useCallback(async () => {
    const switchTo = process.env.ENVIRONMENT === "DEV" ? 80001 : 137;
    switchNetwork?.(switchTo);
  }, [switchNetwork]);
  const handleConnect = useCallback(
    async (connector: Connector | undefined) => {
      let selectedConnector;
      if (connector === "Coinbase") {
        selectedConnector = coinbaseConnector;
      }
      if (connector === "WalletConnect") {
        selectedConnector = walletConnectConnector;
      }
      if (connector === "MetaMask") {
        selectedConnector = injectedConnector;
      }
      // if (!selectedConnector) {
      //   throw new Error("No connector found");
      // }
      try {
        const result = await connect({
          connector: selectedConnector,
        });

        if (utils.isAddress(result.account)) {
          if (result?.chain?.unsupported) {
            networkSwitch();
          }
          onClose?.();
        }
      } catch (e) {
        console.log({ e });
        setConnectError("Something went wrong.");
      }
    },
    []
  );

  return (
    <Modal onClose={onClose}>
      <div className={styles.content}>
        <h2>Connect Wallet</h2>
        {connectors?.map((connector) => (
          <Button
            key={connector}
            className={styles.connector}
            onClick={() => handleConnect(connector)}
          >
            <Image
              src={`/${connector}.png`}
              height={25}
              width={connector == "WalletConnect" ? 30 : 25}
              alt={connector}
              priority
            />
            <div>{connector}</div>
          </Button>
        ))}
        <span className={styles.error}>
          {connectError ?? switchError ?? " "}
        </span>
      </div>
    </Modal>
  );
};

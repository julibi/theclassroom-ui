import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Address } from "@wagmi/core";
import style from "./wallet-connection.module.css";
import { truncateAddress } from "@/utils/truncateAddress";
import { WalletConnectionModal } from "../wallet-connection-modal/wallet-connection-modal";
import { Button } from "../button";
import { useUI } from "@/hooks/use-ui/use-ui";

export const WalletConnection = () => {
  const { address, isConnected, connector } = useAccount();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { openSlider } = useUI();
  const [isModalOpen, setIsOpenModal] = useState(false);

  // // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    if (isConnected && address) {
      setIsLoggedIn(true);
    }
  }, [address, isConnected]);

  return (
    <div className={style.walletConnection}>
      {isLoggedIn ? (
        <Button onClick={openSlider}>NFTs</Button>
      ) : (
        <Button onClick={() => setIsOpenModal(true)}>Connect</Button>
      )}

      {isModalOpen && (
        <WalletConnectionModal onClose={() => setIsOpenModal(false)} />
      )}
    </div>
  );
};

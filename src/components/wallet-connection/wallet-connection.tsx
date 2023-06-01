import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import { Address } from "@wagmi/core";
import style from "./wallet-connection.module.css";
import { truncateAddress } from "@/utils/truncateAddress";
import { WalletConnectionModal } from "../wallet-connection-modal/wallet-connection-modal";
import { Button } from "../button";
import { useUI } from "@/hooks/use-ui/use-ui";

export const WalletConnection = () => {
  const { address, isConnected, connector } = useAccount();
  const [name, setName] = useState<null | undefined | Address | string>(null);
  const { data: ensName, error: ensError } = useEnsName({
    address,
  });
  const { openSlider } = useUI();
  const [isModalOpen, setIsOpenModal] = useState(false);

  // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    if (isConnected) {
      const nm =
        ensName && !ensError
          ? ensName
          : address
          ? truncateAddress(address)
          : null;

      nm && setName(nm);
    }
  }, [address, ensName, ensError, isConnected]);

  return (
    <div className={style.walletConnection}>
      {name ? (
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

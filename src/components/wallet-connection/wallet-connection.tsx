import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import { Address } from "@wagmi/core";
import style from "./wallet-connection.module.css";
import { truncateAddress } from "@/utils/truncateAddress";
import { WalletConnectionModal } from "../wallet-connection-modal/wallet-connection-modal";
import { Button } from "../button";

export const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  const [name, setName] = useState<null | undefined | Address | string>(null);
  const { data: ensName, error: ensError } = useEnsName({
    address,
  });
  const [isModalOpen, setIsOpenModal] = useState(false);

  // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    const nm =
      ensName && !ensError
        ? ensName
        : address
        ? truncateAddress(address)
        : null;

    nm && setName(nm);
  }, [address, ensName, ensError]);
  console.log({ name });
  return (
    <div className={style.walletConnection}>
      {name && isConnected && <span>{name}</span>}

      {!isConnected && (
        <Button onClick={() => setIsOpenModal(true)}>Connect</Button>
      )}

      {isModalOpen && (
        <WalletConnectionModal onClose={() => setIsOpenModal(false)} />
      )}
    </div>
  );
};

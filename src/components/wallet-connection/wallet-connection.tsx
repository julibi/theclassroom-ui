import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Address } from "@wagmi/core";
import { fetchEnsName, getAccount } from "@wagmi/core";
import style from "./wallet-connection.module.css";
import { truncateAddress } from "@/utils/truncateAddress";
import { WalletConnectionModal } from "../wallet-connection-modal/wallet-connection-modal";
import { Button } from "../button";

export const WalletConnection = () => {
  const { address } = getAccount();
  const [isModalOpen, setIsOpenModal] = useState(false);

  const handleConnect = async () => {
    // const result = await connect({
    //   connector: injectedConnector,
    // });
    // console.log({ result });
  };

  const [name, setName] = useState<Address | undefined>(undefined);

  const fetchENS = useCallback(async () => {
    if (!address) return;
    try {
      const bla = await fetchEnsName({ address });
    } catch (e) {}
  }, [name]);

  // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setName(address);
    fetchENS();
  }, [address]);

  return (
    <div className={style.walletConnection}>
      {name ? (
        <span>{truncateAddress(name)}</span>
      ) : (
        <Button onClick={() => setIsOpenModal(true)}>Connect</Button>
      )}
      {isModalOpen && (
        <WalletConnectionModal onClose={() => setIsOpenModal(false)} />
      )}
    </div>
  );
};

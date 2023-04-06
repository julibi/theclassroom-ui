import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Address, FetchEnsAddressArgs } from "@wagmi/core";
import { getNetwork, connect, fetchEnsName, getAccount } from "@wagmi/core";
import { injectedConnector } from "@/providers/wagmiProvider/wagmiProvider";
import style from "./wallet-connection.module.css";
import { truncateAddress } from "@/utils/truncateAddress";

export const WalletConnection = () => {
  const { address } = getAccount();
  const { chain } = getNetwork();

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
        <button onClick={handleConnect}>Connect</button>
      )}
    </div>
  );
};

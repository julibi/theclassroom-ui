import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address, useAccount, useContractRead } from "wagmi";
import {
  MOONPAGE_COLLECTION_ADDRESS_DEV,
  MOONPAGE_MANAGER_ADDRESS_DEV,
  projectId,
} from "@/constants";
import { loop } from "@/utils/ loop";
import { Abi } from "abitype";
import { multicall } from "@wagmi/core";
import { Call } from "@/components/slider/slider.types";
import COLLECTION_ABI from "../../abis/MoonpageCollection.json";
import MANAGER_ABI from "../../abis/MoonpageManager.json";
import { UserApi, UserProviderProps } from "./userProvider.types";

const defaultContext: UserApi = {
  fetchNFTs: () => undefined,
  ids: null,
};

export const UserContext = createContext(defaultContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const { address } = useAccount();
  const [ids, setIds] = useState<null | Number[]>(null);
  const { data: balanceOfAddress } = useContractRead({
    address: MOONPAGE_COLLECTION_ADDRESS_DEV,
    abi: COLLECTION_ABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: edition } = useContractRead({
    address: MOONPAGE_MANAGER_ADDRESS_DEV,
    abi: MANAGER_ABI,
    functionName: "editions",
    args: [projectId],
  });

  const fetchNFTs = useCallback(async () => {
    let callsForMulticalls: Call[] = [];
    loop(Number(balanceOfAddress), (i: number) => {
      callsForMulticalls.push({
        address: MOONPAGE_COLLECTION_ADDRESS_DEV,
        abi: COLLECTION_ABI as Abi,
        functionName: "tokenOfOwnerByIndex",
        args: [address as Address, i],
      });
    });
    const result = await multicall({
      contracts: callsForMulticalls,
    });
    const Ids = result?.map((res) => Number(res));
    // @ts-ignore Property 'startTokenId' does not exist on type '{}'.
    const startTokenId = Number(edition?.startTokenId);
    // @ts-ignore Property 'startTokenId' does not exist on type '{}'.
    const currentTokenId = Number(edition?.currentTokenId);
    const IdsOfProject = Ids.filter(
      (id) => id >= startTokenId && currentTokenId >= id
    );
    setIds(IdsOfProject);
  }, [address, balanceOfAddress, edition]);

  useEffect(() => {
    fetchNFTs();
  }, [fetchNFTs]);

  const api = useMemo(() => ({ fetchNFTs, ids }), [fetchNFTs, ids]);
  return <UserContext.Provider value={api}>{children}</UserContext.Provider>;
};

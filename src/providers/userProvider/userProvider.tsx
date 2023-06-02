import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address, useAccount, useContractRead } from "wagmi";
import { projectId } from "@/constants";
import { loop } from "@/utils/ loop";
import { Abi } from "abitype";
import { multicall } from "@wagmi/core";
import { Call } from "@/components/slider/slider.types";
import COLLECTION_ABI from "../../abis/MoonpageCollection.json";
import { NFT, UserApi, UserProviderProps } from "./userProvider.types";
import { useSnippets } from "@/hooks/use-snippets";
import { MPContract } from "@/utils/MPContract";
import { useMoonpage } from "@/hooks/use-moonpage";

const defaultContext: UserApi = {
  fetchNFTs: () => undefined,
  NFTs: null,
};

export const UserContext = createContext(defaultContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const { address } = useAccount();
  const { allSnippets } = useSnippets();
  const { edition } = useMoonpage();
  const [hasFetchedNFTs, setHasFetchedNFTs] = useState(false);

  const [NFTs, setNFTs] = useState<null | NFT[]>(null);
  const { data: balanceOfAddress } = useContractRead({
    address: MPContract as Address,
    abi: COLLECTION_ABI,
    functionName: "balanceOf",
    args: [address],
    cacheOnBlock: true,
  });

  const fetchNFTs = useCallback(async () => {
    try {
      let callsForMulticalls: Call[] = [];
      loop(Number(balanceOfAddress), (i: number) => {
        callsForMulticalls.push({
          address: MPContract as Address,
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

      const filteredNFTs = IdsOfProject.map((id) => {
        const unshiftedCharacterId = id % 10;
        const characterId =
          unshiftedCharacterId == 0 ? 10 : unshiftedCharacterId;
        return {
          id,
          characterId,
          written: !!allSnippets.find((snippet) => snippet.tokenId === id),
        };
      });
      setNFTs(filteredNFTs);
      setHasFetchedNFTs(true);
    } catch (e) {
      console.log({ e });
    }
  }, [
    address,
    allSnippets,
    balanceOfAddress,
    edition?.currentTokenId,
    edition?.startTokenId,
  ]);

  useEffect(() => {
    if (balanceOfAddress && edition && allSnippets && !hasFetchedNFTs) {
      fetchNFTs();
    }
  }, [fetchNFTs, allSnippets, balanceOfAddress, edition, hasFetchedNFTs]);

  const api = useMemo(() => ({ fetchNFTs, NFTs }), [fetchNFTs, NFTs]);
  return <UserContext.Provider value={api}>{children}</UserContext.Provider>;
};

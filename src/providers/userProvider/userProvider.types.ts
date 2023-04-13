import { ReactNode } from "react";

export type UserApi = {
  fetchNFTs: () => void;
  NFTs: null | NFT[];
};

export type UserProviderProps = {
  children: ReactNode;
};

export type NFT = {
  id: number;
  characterId: number;
  written: boolean;
};

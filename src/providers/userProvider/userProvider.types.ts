import { ReactNode } from "react";

export type UserApi = {
  fetchNFTs: () => void;
  ids: null | Number[];
};

export type UserProviderProps = {
  children: ReactNode;
};

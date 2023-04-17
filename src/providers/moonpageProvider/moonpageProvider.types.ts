import { BigNumber } from "ethers";
import { ReactNode } from "react";

export type Edition = {
  current: BigNumber;
  currentEdLastTokenId: BigNumber;
  currentTokenId: BigNumber;
  endTokenId: BigNumber;
  lastGenEdTokenId: BigNumber;
  mintPrice: BigNumber;
  startTokenId: BigNumber;
};
export type MoonpageProviderProps = { children: ReactNode };
export type MoonpageApi = {
  edition: Edition;
  refetch: () => void;
};

export type EditionReadResult = {
  data: Edition;
  refetch: () => void;
};

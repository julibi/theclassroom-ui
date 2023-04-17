import { BigNumber } from "ethers";

export type MintingProps = {};

export type EditionCalcsType = {
  totalSupply: BigNumber;
  maxSupply: BigNumber;
  leftSupplyTotal: BigNumber;
  price: BigNumber;
};

import { BigNumber } from "ethers";

export type MintingProps = {
  className?: string;
};

export type EditionCalcsType = {
  totalSupply: BigNumber;
  maxSupply: BigNumber;
  leftSupplyTotal: BigNumber;
  leftSupplyEdition: BigNumber;
  price: BigNumber;
};

import { Address } from "@wagmi/core";
import { Abi } from "abitype";

export type Call = {
  address: Address;
  abi: Abi;
  functionName: string;
  args: [Address, number];
};

export type Edition = {
  current: BigInt;
  currentEdLastTokenId: BigInt;
  currentTokenId: BigInt;
  endTokenId: BigInt;
  lastGenEdTokenId: BigInt;
  mintPrice: BigInt;
  startTokenId: BigInt;
};

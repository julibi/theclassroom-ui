import { Address } from "@wagmi/core";
import { Abi } from "abitype";

export type Call = {
  address: Address;
  abi: Abi;
  functionName: string;
  args: number[];
};

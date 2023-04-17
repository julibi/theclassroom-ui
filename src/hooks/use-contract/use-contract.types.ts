import { Abi } from "abitype";
import { BigNumber, CallOverrides, ContractInterface } from "ethers";
import { Address } from "wagmi";

export type ContractWriteStatus =
  | "idle"
  | "confirming"
  | "waiting"
  | "success"
  | "error"
  | "preparing"
  | "fetching";
export type ContractArgs =
  | string
  | string[]
  | [string, string, string][]
  | [string, string[]][]
  | [Address[], boolean[]]
  | BigNumber
  | boolean
  | boolean[]
  | number
  | number[]
  | undefined;

export interface UseContractProps {
  address?: Address;
  abi: Abi;
  functionName: string;
  args?: ContractArgs[];
  enabled?: boolean;
  overrides?: CallOverrides;
  mode?: "prepared" | "recklesslyUnprepared";
}

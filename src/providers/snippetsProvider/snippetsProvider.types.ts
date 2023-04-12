import { Abi } from "abitype";
import { ReactNode } from "react";
import { Address } from "wagmi";

export type SnippetsProviderProps = {
  children: ReactNode;
};

export type SnippetsApi = {
  snippetsIndex?: number | unknown;
};

export type SnippetCall = {
  address: Address;
  abi: Abi;
  functionName: string;
  args: [number];
};

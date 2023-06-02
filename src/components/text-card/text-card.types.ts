import { Address } from "wagmi";

export type Snippet = {
  character: number;
  textIPFSHash: string;
  translationIPFSHash: string;
  tokenId: number;
  writer: Address;
  written: boolean;
  writtenAt: number;
};

export type TextCardProps = {
  snippet: Snippet;
  id: number;
};

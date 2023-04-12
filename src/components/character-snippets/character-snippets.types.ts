import { Address } from "wagmi";

export type CharacterSnippetsProps = {
  characterId: number;
};

export type Snippet = {
  character: number;
  textIPFSHash: string;
  tokenId: number;
  writer: Address;
  written: boolean;
  writtenAt: number;
};
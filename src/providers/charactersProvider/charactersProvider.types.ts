import { ReactNode } from "react";
export type CharacterItem = {
  name: string;
  textIpfsHash: string;
  imageIpfsHash: string;
};

export type CharactersApi = {
  fetchCharacters: () => Promise<void>;
  characters: CharacterItem[] | null;
};

export type CharactersProviderProps = {
  children: ReactNode;
};

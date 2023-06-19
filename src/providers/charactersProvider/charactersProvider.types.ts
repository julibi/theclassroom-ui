import { ReactNode } from "react";
export type CharacterItem = {
  id: number;
  name: string;
  text: string;
  translation?: string;
  img?: string;
  birthDate: string;
  birthPlace: string;
  checkIn: string;
};

export type CharactersApi = {
  fetchCharacters: () => Promise<void>;
  characters: CharacterItem[] | null;
};

export type CharactersProviderProps = {
  children: ReactNode;
};

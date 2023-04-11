import { useContext } from "react";
import { CharactersContext } from "../../providers/charactersProvider/charactersProvider";

export const useCharacters = () => {
  const api = useContext(CharactersContext);
  if (!api) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }

  return api;
};

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/TCR.json";
import {
  CharacterItem,
  CharactersApi,
  CharactersProviderProps,
} from "./charactersProvider.types";
import { TCRContract } from "@/utils/TCRContract";
import { CHARACTERS } from "@/constants";

const defaultContext: CharactersApi = {
  characters: null,
  fetchCharacters: async () => undefined,
};

export const CharactersContext = createContext(defaultContext);

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<null | CharacterItem[]>(null);
  // const { data: character1 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [1],
  // });
  // const { data: character2 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [2],
  // });
  // const { data: character3 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [3],
  // });
  // const { data: character4 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [4],
  // });
  // const { data: character5 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [5],
  // });
  // const { data: character6 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [6],
  // });
  // const { data: character7 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [7],
  // });
  // const { data: character8 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [8],
  // });
  // const { data: character9 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [9],
  // });
  // const { data: character10 } = useContractRead({
  //   address: TCRContract,
  //   abi: ABI,
  //   functionName: "characters",
  //   args: [10],
  // });

  const fetchCharacters = useCallback(async () => {
    setCharacters(CHARACTERS);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const api = useMemo(
    () => ({
      fetchCharacters,
      characters,
    }),
    [characters, fetchCharacters]
  );
  return (
    <CharactersContext.Provider value={api}>
      {children}
    </CharactersContext.Provider>
  );
};

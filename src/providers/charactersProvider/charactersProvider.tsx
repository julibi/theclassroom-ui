import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address } from "wagmi";
import { multicall } from "@wagmi/core";
import { TCR_PROD } from "@/constants";
import ABI from "../../abis/TCR.json";
import {
  CharacterItem,
  CharactersApi,
  CharactersProviderProps,
} from "./charactersProvider.types";

const defaultContext: CharactersApi = {
  characters: null,
  fetchCharacters: async () => undefined,
};

export const CharactersContext = createContext(defaultContext);

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<null | CharacterItem[]>(null);

  const fetchCharacters = useCallback(async () => {
    const call = {
      address: TCR_PROD as Address,
      abi: ABI,
      functionName: "characters",
    };

    const data = await multicall({
      contracts: [
        {
          ...call,
          args: [1],
        },
        {
          ...call,
          args: [2],
        },
        {
          ...call,
          args: [3],
        },
        {
          ...call,
          args: [4],
        },
        {
          ...call,
          args: [5],
        },
        {
          ...call,
          args: [6],
        },
        {
          ...call,
          args: [7],
        },
        {
          ...call,
          args: [8],
        },
        {
          ...call,
          args: [9],
        },
        {
          ...call,
          args: [10],
        },
      ],
    });

    if (data.length && data[0]) {
      const definedCharacters: CharacterItem[] = data
        .filter((item: any) => !!item[0].length && !!item[1].length)
        .map((item: any) => ({
          name: item.name,
          textIpfsHash: item.textIPFSHash,
          translationIpfsHash: item.translationIPFSHash,
          imageIpfsHash: item.imageIpfsHash,
        }));

      definedCharacters?.length && setCharacters(definedCharacters);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const api = useMemo(
    () => ({
      fetchCharacters,
      characters,
    }),
    [fetchCharacters, characters]
  );
  return (
    <CharactersContext.Provider value={api}>
      {children}
    </CharactersContext.Provider>
  );
};

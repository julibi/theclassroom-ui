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

const defaultContext: CharactersApi = {
  characters: null,
  fetchCharacters: async () => undefined,
};

export const CharactersContext = createContext(defaultContext);

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [characters, setCharacters] = useState<null | CharacterItem[]>(null);
  const { data: character1 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [1],
  });
  const { data: character2 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [2],
  });
  const { data: character3 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [3],
  });
  const { data: character4 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [4],
  });
  const { data: character5 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [5],
  });
  const { data: character6 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [6],
  });
  const { data: character7 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [7],
  });
  const { data: character8 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [8],
  });
  const { data: character9 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [9],
  });
  const { data: character10 } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "characters",
    args: [10],
  });

  const fetchCharacters = useCallback(async () => {
    // FUCKING BROKEN??
    // const call = {
    //   address: TCRContract as Address,
    //   abi: ABI,
    //   functionName: "characters",
    // };
    // try {
    //   const data = await multicall({
    //     contracts: [
    //       {
    //         ...call,
    //         args: [1],
    //       },
    //       {
    //         ...call,
    //         args: [2],
    //       },
    //       {
    //         ...call,
    //         args: [3],
    //       },
    //       {
    //         ...call,
    //         args: [4],
    //       },
    //       {
    //         ...call,
    //         args: [5],
    //       },
    //       {
    //         ...call,
    //         args: [6],
    //       },
    //       {
    //         ...call,
    //         args: [7],
    //       },
    //       {
    //         ...call,
    //         args: [8],
    //       },
    //       {
    //         ...call,
    //         args: [9],
    //       },
    //       {
    //         ...call,
    //         args: [10],
    //       },
    //     ],
    //   });
    //   if (data.length && data[0]) {
    //     const definedCharacters: CharacterItem[] = data
    //       .filter((item: any) => !!item[0].length && !!item[1].length)
    //       .map((item: any) => ({
    //         name: item.name,
    //         textIpfsHash: item.textIPFSHash,
    //         translationIpfsHash: item.translationIPFSHash,
    //         imageIpfsHash: item.imageIpfsHash,
    //       }));
    //     definedCharacters?.length && setCharacters(definedCharacters);
    //   }
    // } catch (e) {
    //   console.log({ e });
    // }
    const allCharacters = [
      character1,
      character2,
      character3,
      character4,
      character5,
      character6,
      character7,
      character8,
      character9,
      character10,
    ];
    const definedCharacters: CharacterItem[] = allCharacters
      ?.filter((item: any) => item && !!item[0].length && !!item[1].length)
      ?.map((item: any, key) => ({
        id: key + 1,
        name: item.name,
        textIpfsHash: item.textIPFSHash,
        translationIpfsHash: item.translationIPFSHash,
        imageIpfsHash: item.imageIpfsHash,
      }));
    definedCharacters?.length && setCharacters(definedCharacters);
  }, [
    character1,
    character10,
    character2,
    character3,
    character4,
    character5,
    character6,
    character7,
    character8,
    character9,
  ]);

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

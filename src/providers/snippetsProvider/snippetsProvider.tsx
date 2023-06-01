import { createContext, useCallback, useMemo } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/TCR.json";
import { SnippetsApi, SnippetsProviderProps } from "./snippetsProvider.types";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";
import { TCRContract } from "@/utils/TCRContract";

const defaultContext: SnippetsApi = {
  snippetsIndex: 0,
  allSnippets: [],
  refetchAllSnippets: () => undefined,
};

export const SnippetsContext = createContext(defaultContext);

export const SnippetsProvider = ({ children }: SnippetsProviderProps) => {
  const { data: snippetsIndex } = useContractRead({
    address: TCRContract,
    abi: ABI,
    functionName: "index",
    args: [],
  });
  const {
    characterSnippets: snippets1,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter1,
  } = useCharacterSnippets({
    characterId: 1,
  });
  const {
    characterSnippets: snippets2,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter2,
  } = useCharacterSnippets({
    characterId: 2,
  });
  const {
    characterSnippets: snippets3,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter3,
  } = useCharacterSnippets({
    characterId: 3,
  });
  const {
    characterSnippets: snippets4,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter4,
  } = useCharacterSnippets({
    characterId: 4,
  });
  const {
    characterSnippets: snippets5,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter5,
  } = useCharacterSnippets({
    characterId: 5,
  });
  const {
    characterSnippets: snippets6,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter6,
  } = useCharacterSnippets({
    characterId: 6,
  });
  const {
    characterSnippets: snippets7,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter7,
  } = useCharacterSnippets({
    characterId: 7,
  });
  const {
    characterSnippets: snippets8,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter8,
  } = useCharacterSnippets({
    characterId: 8,
  });
  const {
    characterSnippets: snippets9,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter9,
  } = useCharacterSnippets({
    characterId: 9,
  });
  const {
    characterSnippets: snippets10,
    refetchSnippetsOfCharacter: refetchSnippetsOfCharacter10,
  } = useCharacterSnippets({
    characterId: 10,
  });

  const allSnippets = useMemo(
    () => [
      ...snippets1,
      ...snippets2,
      ...snippets3,
      ...snippets4,
      ...snippets5,
      ...snippets6,
      ...snippets7,
      ...snippets8,
      ...snippets9,
      ...snippets10,
    ],
    [
      snippets1,
      snippets2,
      snippets3,
      snippets4,
      snippets5,
      snippets6,
      snippets7,
      snippets8,
      snippets9,
      snippets10,
    ]
  );

  const refetchAllSnippets = useCallback(() => {
    refetchSnippetsOfCharacter1();
    refetchSnippetsOfCharacter2();
    refetchSnippetsOfCharacter3();
    refetchSnippetsOfCharacter4();
    refetchSnippetsOfCharacter5();
    refetchSnippetsOfCharacter6();
    refetchSnippetsOfCharacter7();
    refetchSnippetsOfCharacter8();
    refetchSnippetsOfCharacter9();
    refetchSnippetsOfCharacter10();
  }, [
    refetchSnippetsOfCharacter1,
    refetchSnippetsOfCharacter2,
    refetchSnippetsOfCharacter3,
    refetchSnippetsOfCharacter4,
    refetchSnippetsOfCharacter5,
    refetchSnippetsOfCharacter6,
    refetchSnippetsOfCharacter7,
    refetchSnippetsOfCharacter8,
    refetchSnippetsOfCharacter9,
    refetchSnippetsOfCharacter10,
  ]);

  const api = useMemo(
    () => ({
      snippetsIndex,
      allSnippets,
      refetchAllSnippets,
    }),
    [snippetsIndex, allSnippets, refetchAllSnippets]
  );
  return (
    <SnippetsContext.Provider value={api}>{children}</SnippetsContext.Provider>
  );
};

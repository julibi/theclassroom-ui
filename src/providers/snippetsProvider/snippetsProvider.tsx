import { TCR_DEV } from "@/constants";
import { createContext, useMemo } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/TCR.json";
import { SnippetsApi, SnippetsProviderProps } from "./snippetsProvider.types";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";

const defaultContext: SnippetsApi = {
  snippetsIndex: 0,
  allSnippets: [],
};

export const SnippetsContext = createContext(defaultContext);

export const SnippetsProvider = ({ children }: SnippetsProviderProps) => {
  const { data: snippetsIndex } = useContractRead({
    address: TCR_DEV,
    abi: ABI,
    functionName: "index",
    args: [],
  });
  const snippets1 = useCharacterSnippets({ characterId: 1 });
  const snippets2 = useCharacterSnippets({ characterId: 2 });
  const snippets3 = useCharacterSnippets({ characterId: 3 });
  const snippets4 = useCharacterSnippets({ characterId: 4 });
  const snippets5 = useCharacterSnippets({ characterId: 5 });
  const snippets6 = useCharacterSnippets({ characterId: 6 });
  const snippets7 = useCharacterSnippets({ characterId: 7 });
  const snippets8 = useCharacterSnippets({ characterId: 8 });
  const snippets9 = useCharacterSnippets({ characterId: 9 });
  const snippets10 = useCharacterSnippets({ characterId: 10 });

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

  const api = useMemo(
    () => ({
      snippetsIndex,
      allSnippets,
    }),
    [snippetsIndex, allSnippets]
  );
  return (
    <SnippetsContext.Provider value={api}>{children}</SnippetsContext.Provider>
  );
};

import React, { useMemo } from "react";
import { useContractRead } from "wagmi";
import { TCR_DEV } from "@/constants";
import ABI from "../../abis/TCR.json";
import { Snippet } from "@/components/character-snippets/character-snippets.types";
import { UseCharacterSnippetsProps } from "./use-character-snippets.types";

export const useCharacterSnippets = ({
  characterId,
}: UseCharacterSnippetsProps) => {
  const { data } = useContractRead({
    address: TCR_DEV,
    abi: ABI,
    functionName: "snippetsOfCharacter",
    args: [characterId],
  });
  const characterSnippets: Snippet[] = useMemo(() => {
    // @ts-ignore
    if (data && typeof data.length == "number") {
      return (
        data
          // @ts-ignore
          .filter((data: any) => data.written)
          .map((data: any) => ({
            ...data,
            tokenId: Number(data.tokenId),
            characterId: Number(data.characterId),
            writtenAt: Number(data.writtenAt),
          }))
      );
    } else {
      return [];
    }
  }, [data]);
  return characterSnippets;
};

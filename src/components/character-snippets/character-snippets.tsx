import React, { useMemo } from "react";
import styles from "./character-snippets.module.css";
import { useContractRead } from "wagmi";
import { TCR_DEV } from "@/constants";
import ABI from "../../abis/TCR.json";
import { CharacterSnippetsProps, Snippet } from "./character-snippets.types";
import { TextCard } from "../text-card";

export const CharacterSnippets = ({ characterId }: CharacterSnippetsProps) => {
  const { data } = useContractRead({
    address: TCR_DEV,
    abi: ABI,
    functionName: "snippetsOfCharacter",
    args: [characterId],
  });
  const snippets: Snippet[] = useMemo(() => {
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
    }
  }, [data]);

  return (
    <div>
      {snippets?.map((snippet, idx) => (
        <TextCard snippet={snippet} key={idx} />
      ))}
    </div>
  );
};

import React from "react";
import { CharacterSnippetsProps } from "./character-snippets.types";
import { TextCard } from "../text-card";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";

export const CharacterSnippets = ({ characterId }: CharacterSnippetsProps) => {
  const { characterSnippets } = useCharacterSnippets({ characterId });

  return (
    <div>
      {characterSnippets?.map((snippet, idx) => (
        <TextCard snippet={snippet} key={idx} id={snippet.tokenId} />
      ))}
    </div>
  );
};

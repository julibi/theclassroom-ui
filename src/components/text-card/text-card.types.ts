import { MutableRefObject } from "react";
import { Snippet } from "../character-snippets/character-snippets.types";

export type TextCardProps = {
  snippet: Snippet;
  id: number;
};

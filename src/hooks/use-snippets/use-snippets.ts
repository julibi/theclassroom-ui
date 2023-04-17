import { useContext } from "react";
import { SnippetsContext } from "../../providers/snippetsProvider/snippetsProvider";

export const useSnippets = () => {
  const api = useContext(SnippetsContext);
  if (!api) {
    throw new Error("useSnippet must be used within a SnippetsProvider");
  }

  return api;
};

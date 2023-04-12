import { useContext } from "react";
import { SnippetsContext } from "../../providers/snippetsProvider/snippetsProvider";

export const useSnippets = () => {
  const api = useContext(SnippetsContext);
  if (!api) {
    throw new Error("useSlider must be used within a SliderProvider");
  }

  return api;
};

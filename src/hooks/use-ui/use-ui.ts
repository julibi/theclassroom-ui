import { useContext } from "react";
import { UIContext } from "../../providers/uiProvider/uiProvider";

export const useUI = () => {
  const api = useContext(UIContext);
  if (!api) {
    throw new Error("useUI must be used within a UIProvider");
  }

  return api;
};

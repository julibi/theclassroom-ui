import { TCR_DEV } from "@/constants";
import { createContext, useMemo } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/TCR.json";
import { SnippetsApi, SnippetsProviderProps } from "./snippetsProvider.types";

const defaultContext: SnippetsApi = {
  snippetsIndex: 0,
};

export const SnippetsContext = createContext(defaultContext);

export const SnippetsProvider = ({ children }: SnippetsProviderProps) => {
  const { data: snippetsIndex } = useContractRead({
    address: TCR_DEV,
    abi: ABI,
    functionName: "index",
    args: [],
  });

  const api = useMemo(
    () => ({
      snippetsIndex,
    }),
    [snippetsIndex]
  );
  return (
    <SnippetsContext.Provider value={api}>{children}</SnippetsContext.Provider>
  );
};

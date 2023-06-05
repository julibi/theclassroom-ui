import React, { createContext, useMemo } from "react";
import { useContractRead } from "wagmi";
import { projectId } from "@/constants";
import MANAGER_ABI from "../../abis/MoonpageManager.json";
import {
  EditionReadResult,
  MoonpageApi,
  MoonpageProviderProps,
} from "./moonpageProvider.types";
import { MPManagerContract } from "@/utils/MPManagerContract";

const defaultContext: MoonpageApi = {
  edition: undefined,
  refetch: () => undefined,
};

export const MoonpageContext = createContext(defaultContext);

export const MoonpageProvider = ({ children }: MoonpageProviderProps) => {
  const { data: edition, refetch } = useContractRead({
    address: MPManagerContract,
    abi: MANAGER_ABI,
    functionName: "editions",
    args: [projectId],
    watch: true,
  }) as EditionReadResult;

  const api = useMemo(() => ({ edition, refetch }), [edition, refetch]);
  return (
    <MoonpageContext.Provider value={api}>{children}</MoonpageContext.Provider>
  );
};

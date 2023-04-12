import { MOONPAGE_PROFILES_ADDRESS_DEV } from "@/constants";
import { useMemo } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/MoonpageProfiles.json";
import { Profile } from "./use-profile.types";

export const useProfile = (profileAddress: string): Profile => {
  const { data: profile } = useContractRead({
    address: MOONPAGE_PROFILES_ADDRESS_DEV,
    abi: ABI,
    functionName: "profiles",
    args: [profileAddress],
  });

  return useMemo(() => profile as Profile, [profile]);
};

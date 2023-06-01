import { useMemo } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../abis/MoonpageProfiles.json";
import { Profile } from "./use-profile.types";
import { MPProfilesContract } from "@/utils/MPProfilesContract";

export const useProfile = (profileAddress: string): Profile => {
  const { data: profile } = useContractRead({
    address: MPProfilesContract,
    abi: ABI,
    functionName: "profiles",
    args: [profileAddress],
  });

  return useMemo(() => profile as Profile, [profile]);
};

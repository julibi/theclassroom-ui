import { Abi } from "abitype";
import { useMemo } from "react";
import { TCR_DEV } from "@/constants";
import { useContract } from "@/hooks/use-contract";
import ABI from "../../abis/TCR.json";

// TODO: PIN DATA TO PINATA

export function useSetupCharacter(name: string, textIpfsHash: string) {
  const { write, status, error } = useContract({
    address: TCR_DEV,
    abi: ABI as Abi,
    functionName: "setupCharacter",
    args: [name, textIpfsHash],
    enabled: true,
  });

  return useMemo(
    () => ({
      write,
      status,
      error,
    }),
    [error, status, write]
  );
}

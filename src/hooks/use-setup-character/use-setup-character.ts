import { Abi } from "abitype";
import { useMemo } from "react";
import { useContract } from "@/hooks/use-contract";
import ABI from "../../abis/TCR.json";
import { useDebounce } from "../use-debounce";
import { TCRContract } from "@/utils/TCRContract";

// TODO: ADD IMAGE
// TODO: PIN DATA TO PINATA

export function useSetupCharacter(name: string, textIPFSHash: string) {
  const debouncedName = useDebounce(name, 500);
  const debouncedTextIPFSHash = useDebounce(textIPFSHash, 500);
  const { write, writeAsync, status, error, data } = useContract({
    address: TCRContract,
    abi: ABI as Abi,
    functionName: "setupCharacter",
    args: [debouncedName, debouncedTextIPFSHash, ""],
    mode: "recklesslyUnprepared",
  });

  return useMemo(
    () => ({
      write,
      writeAsync,
      status,
      error,
      data,
    }),
    [data, error, status, write, writeAsync]
  );
}

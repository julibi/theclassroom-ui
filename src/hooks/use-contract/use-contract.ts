import { useCallback, useEffect, useState } from "react";
import { BigNumber } from "ethers";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ContractWriteStatus, UseContractProps } from "./use-contract.types";
import { useGasEstimation } from "../use-gas-estimation";

export function useContract({
  address,
  abi,
  functionName,
  args,
  enabled = false,
}: UseContractProps) {
  const [status, setStatus] = useState<ContractWriteStatus>("idle");

  const { estimatedGas } = useGasEstimation({
    address,
    abi,
    functionName,
    args,
    multiplier: 30,
    isEnabled: enabled,
  });

  const {
    config,
    error: prepareError,
    status: prepareStatus,
  } = usePrepareContractWrite({
    address,
    abi,
    functionName,
    args,
    enabled,
    overrides: {
      gasLimit: estimatedGas ?? BigNumber.from("500000"),
    },
  });

  const {
    write,
    writeAsync,
    data: txRes,
    error,
    status: writeStatus,
    reset,
  } = useContractWrite({
    ...config,
  });
  const { data: res, status: waitStatus } = useWaitForTransaction({
    hash: txRes?.hash,
  });

  useEffect(() => {
    if (prepareStatus === "loading") {
      setStatus("preparing");
    } else if (writeStatus === "loading") {
      setStatus("confirming");
    } else if (waitStatus === "loading" && writeStatus === "success") {
      setStatus("fetching");
    } else if (error || prepareError) {
      if (error?.name === "UserRejectedRequestError") {
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } else if (writeStatus === "success" && waitStatus === "success") {
      setStatus("success");
    }
  }, [
    error,
    waitStatus,
    writeStatus,
    prepareError,
    prepareStatus,
    txRes?.hash,
  ]);

  const process = useCallback(() => {
    write?.();
  }, [write]);

  const processAsync = useCallback(async () => {
    return writeAsync?.();
  }, [writeAsync]);

  const resetFunctionCall = useCallback(async () => {
    setStatus("idle");
    reset();
  }, [reset]);
  console.log({ prepareError, res, txRes });
  return {
    write: process,
    writeAsync: processAsync,
    data: res,
    status,
    setStatus,
    error: status === "error" ? error ?? prepareError ?? null : null,
    reset: resetFunctionCall,
  };
}

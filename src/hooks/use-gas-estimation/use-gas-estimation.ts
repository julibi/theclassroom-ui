import { Abi } from "abitype";
import { BigNumber } from "ethers";
import { useMemo } from "react";
import { Address, usePrepareContractWrite } from "wagmi";
import { ContractArgs } from "../use-contract/use-contract.types";

interface UseGasEstimationProps {
  address?: Address;
  abi: Abi;
  functionName: string;
  args?: ContractArgs[];
  //In percent, e.g. 10 is 10%
  multiplier?: number;
  isEnabled: boolean;
}

export function useGasEstimation({
  abi,
  args,
  functionName,
  address,
  multiplier = 10,
  isEnabled,
}: UseGasEstimationProps) {
  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName,
    args,
    enabled: isEnabled,
  });

  const estimatedGas = useMemo(() => {
    if (config?.request?.gasLimit) {
      return BigNumber.from(config?.request?.gasLimit)
        .mul(BigNumber.from(10000).add(BigNumber.from(multiplier * 100)))
        .div(BigNumber.from(10000));
    }
    return undefined;
  }, [config?.request?.gasLimit, multiplier]);

  return useMemo(
    () => ({
      estimatedGas,
    }),
    [estimatedGas]
  );
}

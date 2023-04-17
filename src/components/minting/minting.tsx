import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./minting.module.css";
import { EditionCalcsType, MintingProps } from "./minting.types";
import { Title } from "../title";
import { Button } from "../button";
import { useAccount } from "wagmi";
import { MOONPAGE_COLLECTION_ADDRESS_DEV } from "@/constants";
import COLLECTION_ABI from "../../abis/MoonpageCollection.json";
import { projectId } from "@/constants";
import { useContract } from "@/hooks/use-contract";
import { Abi } from "abitype";
import { BigNumber } from "ethers";
import { useMoonpage } from "@/hooks/use-moonpage";
import { formatEther } from "ethers/lib/utils.js";

export const Minting = ({}: MintingProps) => {
  const BigZero = BigNumber.from("0");
  const { address } = useAccount();
  const { edition } = useMoonpage();
  const [amount, setAmount] = useState(1);
  const [editionCalcs, setEditionCalcs] = useState<EditionCalcsType>({
    totalSupply: BigZero,
    maxSupply: BigZero,
    leftSupplyTotal: BigZero,
  });
  const price = useMemo(() => {
    return edition?.mintPrice.mul(amount);
  }, [amount, edition]);
  const { write, writeAsync, status, error, data } = useContract({
    address: MOONPAGE_COLLECTION_ADDRESS_DEV,
    abi: COLLECTION_ABI as Abi,
    functionName: "publicMint",
    args: [projectId, amount],
    overrides: {
      from: address,
      value: price,
    },
    enabled: !!price && !!amount,
  });
  const isSoldOut = useMemo(
    () => editionCalcs.totalSupply?.eq(editionCalcs.maxSupply),
    [editionCalcs]
  );

  const handleDecrement = useCallback(() => {
    setAmount(amount - 1);
  }, [amount]);
  const handleIncrement = useCallback(() => {
    setAmount(amount + 1);
  }, [amount]);

  const handleMint = async () => {
    writeAsync();
  };

  // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    let newTotalSupply = BigNumber.from("0");
    let newMaxSupply = BigNumber.from("0");
    let newLeftSupplyTotal = BigNumber.from("0");
    if (!edition) return;
    newTotalSupply = edition.currentTokenId?.sub(edition.startTokenId);
    newMaxSupply = edition.endTokenId
      .sub(edition.startTokenId)
      .add(BigNumber.from("1"));

    newLeftSupplyTotal = edition?.currentEdLastTokenId
      .sub(edition?.currentTokenId)
      .add(BigNumber.from("1"));

    setEditionCalcs({
      totalSupply: newTotalSupply,
      maxSupply: newMaxSupply,
      leftSupplyTotal: newLeftSupplyTotal,
    });
  }, [edition, amount]);

  return (
    <div className={styles.mintingSection}>
      <Title size={2}>Minting</Title>
      <Button disabled={isSoldOut || amount === 1} onClick={handleDecrement}>
        -
      </Button>
      <span>{amount}</span>
      <Button
        disabled={isSoldOut || amount === Number(editionCalcs.leftSupplyTotal)}
        onClick={handleIncrement}
      >
        +
      </Button>
      <Button disabled={isSoldOut} onClick={handleMint}>
        MINT
      </Button>
      {Number(editionCalcs.maxSupply) && Number(editionCalcs.totalSupply) && (
        <div>{`${Number(editionCalcs.maxSupply)}/${Number(
          editionCalcs.totalSupply
        )}`}</div>
      )}
      <div>{`Price: ${price ? formatEther(price) : 0} MATIC`}</div>
    </div>
  );
};

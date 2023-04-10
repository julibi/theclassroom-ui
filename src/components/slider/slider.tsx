import cx from "classnames";
import { useAccount, useContractRead } from "wagmi";
import { Address, multicall } from "@wagmi/core";
import React, { useCallback, useState } from "react";
import styles from "./slider.module.css";
import { useSlider } from "@/hooks/use-slider";
import { Button } from "../button";
import { MOONPAGE_COLLECTION_ADDRESS_DEV } from "@/constants";
import ABI from "../../abis/MoonpageCollection.json";
import { loop } from "@/utils/ loop";
import { Abi } from "abitype";
import { Call } from "./slider.types";

export const Slider = () => {
  const { isSliderOpen, openSlider, closeSlider } = useSlider();
  const { address } = useAccount();
  const { data: balanceOfAddress } = useContractRead({
    address: MOONPAGE_COLLECTION_ADDRESS_DEV,
    abi: ABI,
    functionName: "balanceOf",
    args: [address],
  });

  let callsForMulticalls: Call[] = [];
  loop(Number(balanceOfAddress), (i: number) => {
    callsForMulticalls.push({
      address: MOONPAGE_COLLECTION_ADDRESS_DEV,
      abi: ABI as Abi,
      functionName: "tokenOfOwnerByIndex",
      args: [i],
    });
  });

  // TODO: do the actual multicall and show all NFTs of this one project

  console.log({ callsForMulticalls });

  const toggleSlider = useCallback(() => {
    isSliderOpen ? closeSlider() : openSlider();
  }, [isSliderOpen, closeSlider, openSlider]);

  return (
    <div
      className={cx(styles.slider, {
        [styles.slideIn]: isSliderOpen,
        [styles.slideOut]: !isSliderOpen,
      })}
    >
      <div className={styles.content}>
        <Button onClick={toggleSlider} className={styles.closeButton}>
          x
        </Button>
      </div>
    </div>
  );
};

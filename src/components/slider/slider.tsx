import cx from "classnames";
import { useAccount, useContractRead } from "wagmi";
import { Address, multicall } from "@wagmi/core";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./slider.module.css";
import { useSlider } from "@/hooks/use-slider";
import { Button } from "../button";
import {
  MOONPAGE_COLLECTION_ADDRESS_DEV,
  MOONPAGE_MANAGER_ADDRESS_DEV,
  projectId,
} from "@/constants";
import COLLECTION_ABI from "../../abis/MoonpageCollection.json";
import MANAGER_ABI from "../../abis/MoonpageManager.json";
import { loop } from "@/utils/ loop";
import { Abi } from "abitype";
import { Call } from "./slider.types";
import { Title } from "../title";

export const Slider = () => {
  const [ids, setIds] = useState<null | number[]>(null);
  const { isSliderOpen, openSlider, closeSlider } = useSlider();
  const { address } = useAccount();
  const { data: balanceOfAddress } = useContractRead({
    address: MOONPAGE_COLLECTION_ADDRESS_DEV,
    abi: COLLECTION_ABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: edition } = useContractRead({
    address: MOONPAGE_MANAGER_ADDRESS_DEV,
    abi: MANAGER_ABI,
    functionName: "editions",
    args: [projectId],
  });

  const fetchNFTs = useCallback(async () => {
    let callsForMulticalls: Call[] = [];
    loop(Number(balanceOfAddress), (i: number) => {
      callsForMulticalls.push({
        address: MOONPAGE_COLLECTION_ADDRESS_DEV,
        abi: COLLECTION_ABI as Abi,
        functionName: "tokenOfOwnerByIndex",
        args: [address as Address, i],
      });
    });
    const result = await multicall({
      contracts: callsForMulticalls,
    });
    const Ids = result?.map((res) => Number(res));
    // @ts-ignore Property 'startTokenId' does not exist on type '{}'.
    const startTokenId = Number(edition?.startTokenId);
    // @ts-ignore Property 'startTokenId' does not exist on type '{}'.
    const currentTokenId = Number(edition?.currentTokenId);
    const IdsOfProject = Ids.filter(
      (id) => id >= startTokenId && currentTokenId >= id
    );
    setIds(IdsOfProject);
  }, [address, balanceOfAddress, edition]);

  const toggleSlider = useCallback(() => {
    isSliderOpen ? closeSlider() : openSlider();
  }, [isSliderOpen, closeSlider, openSlider]);

  useEffect(() => {
    fetchNFTs();
  }, [fetchNFTs]);

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

        <div className={styles.nftList}>
          <Title size={3} className={styles.title}>
            Your NFTs
          </Title>
          {ids?.map((id) => (
            <Button className={styles.nft} key={id}>{`# ${id}`}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

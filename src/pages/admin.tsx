import { AdminInput } from "@/components/admin-input";
import { multicall } from "@wagmi/core";

import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import { CharacterItem } from "@/components/admin-input/admin-input.types";
import { TCR_DEV } from "@/constants";
import { Address } from "abitype";
import ABI from "../abis/TCR.json";

const Admin = () => {
  const [characters, setCharacters] = useState<null | CharacterItem[]>(null);
  const fetchCharacters = useCallback(async () => {
    const call = {
      address: TCR_DEV as Address,
      abi: ABI,
      functionName: "characters",
    };

    const data = await multicall({
      contracts: [
        {
          ...call,
          args: [1],
        },
        {
          ...call,
          args: [2],
        },
        {
          ...call,
          args: [3],
        },
        {
          ...call,
          args: [4],
        },
        {
          ...call,
          args: [5],
        },
        {
          ...call,
          args: [6],
        },
        {
          ...call,
          args: [7],
        },
        {
          ...call,
          args: [8],
        },
        {
          ...call,
          args: [9],
        },
        {
          ...call,
          args: [10],
        },
      ],
    });

    const definedCharacters: CharacterItem[] = data
      .filter((item: any) => !!item[0].length && !!item[1].length)
      .map((item: any) => ({
        name: item.name,
        textIpfsHash: item.textIPFSHash,
      }));

    console.log({ definedCharacters });

    definedCharacters?.length && setCharacters(definedCharacters);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className={styles.admin}>
      <ul className={styles.list}>
        {characters?.map((character, idx) => (
          <li key={idx} className={styles.listItem}>
            <div className={styles.characterItem}>{character.name}</div>
          </li>
        ))}
      </ul>
      <AdminInput refetch={fetchCharacters} />
    </div>
  );
};

export default Admin;

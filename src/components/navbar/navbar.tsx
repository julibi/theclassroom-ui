import cx from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContractRead } from "wagmi";
import { getAccount } from "@wagmi/core";
import { TCR_DEV } from "@/constants";
import { routes } from "./routes";
import { WalletConnection } from "../wallet-connection";
import ABI from "../../abis/TCR.json";
import styles from "./navbar.module.css";
import { NavbarProps } from "./navbar.types";

export const Navbar = ({ className }: NavbarProps) => {
  const { address } = getAccount();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const { data: readData } = useContractRead({
    address: TCR_DEV,
    abi: ABI,
    functionName: "admins",
    args: [address],
  });

  // because of this UI hydration error: https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setIsAdmin(!!readData as boolean);
  }, [readData]);

  return (
    <div className={cx(styles.navbar, className)}>
      <ul className={styles.list}>
        {routes?.map((route) => (
          <li key={route.name} className={styles.listItem}>
            <Link href={route.path} passHref>
              {route.name}
            </Link>
          </li>
        ))}

        {!!isAdmin && (
          <li key="admin" className={styles.listItem}>
            <Link href={"/admin"} passHref>
              {"admin"}
            </Link>
          </li>
        )}
        <li key="walletconnection" className={styles.listItem}>
          <WalletConnection />
        </li>
      </ul>
    </div>
  );
};

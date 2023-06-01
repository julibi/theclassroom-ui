import cx from "classnames";
import React from "react";
import Link from "next/link";
import { routes } from "./routes";
import { WalletConnection } from "../wallet-connection";
import styles from "./navbar.module.css";
import { NavbarProps } from "./navbar.types";

export const Navbar = ({ className }: NavbarProps) => {
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
        <li key="walletconnection" className={styles.listItem}>
          <WalletConnection />
        </li>
      </ul>
    </div>
  );
};

import Link from "next/link";
import React from "react";
import { WalletConnection } from "../wallet-connection";
import styles from "./navbar.module.css";
import { routes } from "./routes";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {routes?.map((route) => (
          <li key={route.name}>
            <Link href={route.path} passHref>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <WalletConnection />
    </div>
  );
};

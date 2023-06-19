import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cx from "classnames";
import { routes } from "./routes";
import { WalletConnection } from "../wallet-connection";
import styles from "./navbar.module.css";
import { NavbarProps } from "./navbar.types";

export const Navbar = ({ className }: NavbarProps) => {
  const isActive = (pathname: string, routename: string) => {
    if (pathname === "/" && routename === "home") {
      return true;
    } else if (pathname === "/writingapp" && routename === "app") {
      return true;
    } else return false;
  };
  const router = useRouter();
  return (
    <div className={cx(styles.navbar, className)}>
      <ul className={styles.list}>
        {routes?.map((route) => (
          <li
            key={route.name}
            className={cx(
              styles.listItem,
              isActive(router.pathname, route.name) && styles.activeLink
            )}
          >
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

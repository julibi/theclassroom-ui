import React, { useEffect, useRef } from "react";
//@ts-ignore
import Jazzicon from "@metamask/jazzicon";
import { JazzIcon } from "./account-avatar.types";
import styles from "./account-avatar.module.css";

export const AccountAvatar = ({ address, size = 30 }: JazzIcon) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (address && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(
        Jazzicon(size, parseInt(address.slice(2, 10), 30))
      );
    }
  }, [address, size]);

  return (
    <div className={styles.avatar}>
      <div ref={ref as any} />
    </div>
  );
};

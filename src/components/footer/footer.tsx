import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <div className={styles.item}>
          <Link href="https://t.me/moonpagedao/1836" target="_blank">
            Telegram
          </Link>
        </div>
        <Link href="https://twitter.com/orbitretreat" target="_blank">
          <div className={styles.item}>Twitter</div>
        </Link>
      </div>
      <div className={styles.copright}>
        © 2023 Moonpage. All rights reserved.
      </div>
      <div className={styles.impressum}>
        <Link href="/impressum" target="_blank">
          Impressum
        </Link>
      </div>
    </div>
  );
};

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>Contact us</li>
        <li>Privacy Policy</li>
        <li>Credits</li>
        <li>© 2022 Moonpage. All rights reserved.</li>
      </ul>
    </div >
  );
};
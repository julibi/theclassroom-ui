import React from "react";
import { SelectDropdownProps } from "./select-dropdown.types";
import styles from "./select-dropdown.module.css";

export const SelectDropdown = ({
  disabled,
  options,
  onSelect,
}: SelectDropdownProps) => {
  if (!options) {
    return null;
  }
  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="nft-select" className={styles.block}>
        Choose your NFT to write with:
      </label>

      <select
        name="nfts"
        id="nft-select"
        className={styles.block}
        onChange={onSelect}
        disabled={disabled}
      >
        <option value="">-Please choose an option-</option>
        {options?.map((option, idx) => (
          <option value={option} key={idx}>{`# ${option}`}</option>
        ))}
      </select>
    </div>
  );
};

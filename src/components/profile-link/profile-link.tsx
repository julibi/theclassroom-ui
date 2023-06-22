import React, { useState } from "react";
import Image from "next/image";
import styles from "./profile-link.module.css";
import { ProfileLinkProps } from "./profile-link.types";
import { useProfile } from "@/hooks/use-profile";
import { truncateAddress } from "@/utils/truncateAddress";
import { IPFS_BASE_URI } from "@/constants";
import { AccountAvatar } from "../avatar";

export const ProfileLink = ({ address }: ProfileLinkProps) => {
  const [fallbackImage, setFallbackImage] = useState<null | string>(null);
  const profile = useProfile(address);
  console.log({ profile, address });
  console.log("profile.name: ", profile?.name);
  if (profile) {
    return (
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          onError={() => {
            setFallbackImage("/ImgPlaceholder.png");
          }}
          height={30}
          width={30}
          src={fallbackImage ?? `${IPFS_BASE_URI}${profile.imageIPFSHash}`}
          alt={`Image of ${address}`}
          priority
        />
        <a
          href={`https://moonpage.io/profile/${address}`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {profile.name || truncateAddress(address)}
        </a>
      </div>
    );
  } else {
    return (
      <div className={styles.defaultAvatarAndAddress}>
        <AccountAvatar address={address} />
        <span className={styles.truncatedAddress}>
          {truncateAddress(address)}
        </span>
      </div>
    );
  }
};

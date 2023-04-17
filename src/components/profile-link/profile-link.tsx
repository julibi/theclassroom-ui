import React, { useState } from "react";
import Image from "next/image";
import styles from "./profile-link.module.css";
import { ProfileLinkProps } from "./profile-link.types";
import { useProfile } from "@/hooks/use-profile";
import { useEnsName } from "wagmi";
import { truncateAddress } from "@/utils/truncateAddress";
import { IPFS_BASE_URI } from "@/constants";
import { Profile } from "@/hooks/use-profile/use-profile.types";
import { AccountAvatar } from "../avatar";

export const ProfileLink = ({ address }: ProfileLinkProps) => {
  const [fallbackImage, setFallbackImage] = useState<null | string>(null);
  const profile = useProfile(address);
  const { data: ens } = useEnsName({
    address,
  });
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
          {profile.name}
        </a>
      </div>
    );
  } else if (ens) {
    return <span>{ens}</span>;
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

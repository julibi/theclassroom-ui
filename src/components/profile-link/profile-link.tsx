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

  return (
    <div className={styles.wrapper}>
      {profile?.imageIPFSHash?.length > 0 ? (
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
      ) : (
        <AccountAvatar address={address} />
      )}
      <a
        href={`https://moonpage.io/profile/${address}`}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {profile?.name?.length > 0 ? profile.name : truncateAddress(address)}
      </a>
    </div>
  );
};

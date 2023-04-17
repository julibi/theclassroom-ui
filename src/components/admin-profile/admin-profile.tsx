import React, { useCallback, useEffect, useState } from "react";
import styles from "./admin-profile.module.css";
import ProfileImage from "./profile-image";
import { AdminProfileProps } from "./admin-profile.types";
import { Title } from "../title";

export const AdminProfile = ({ profile }: AdminProfileProps) => {
  const [description, setDescription] = useState<null | string>(null);
  const fetchDescription = useCallback(async () => {
    // TODO: first try to fetch from my pinata gate?
    const response = await fetch(
      `https://ipfs.io/ipfs/${profile?.descriptionIPFSHash}`
    );
    if (response.ok) {
      const fetchedText = await response.text();
      console.log(fetchedText);
      setDescription(fetchedText);
    }
  }, [profile?.descriptionIPFSHash]);

  useEffect(() => {
    fetchDescription();
  }, [fetchDescription]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImageWrapper}>
        <ProfileImage
          account={profile.address}
          imageIPFSHash={profile.imageIPFSHash}
          height={230}
        />
      </div>
      <Title size={3} className={styles.name}>
        {profile?.name}
      </Title>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

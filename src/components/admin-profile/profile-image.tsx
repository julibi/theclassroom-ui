import React, { useState } from "react";
import Image from "next/image";
import { IPFS_BASE_URI, PINATA_GATE_URI } from "../../constants";
import { AccountAvatar } from "../avatar";

type ProfileImageProps = {
  account?: string;
  imageIPFSHash?: string;
  height: number;
};

const ProfileImage = ({
  account,
  imageIPFSHash,
  height,
}: ProfileImageProps) => {
  const [fallbackImageUrl, setFallbackImageUrl] = useState<string | null>(null);

  if (account && imageIPFSHash) {
    return (
      <Image
        onError={() => {
          setFallbackImageUrl(`${IPFS_BASE_URI}${imageIPFSHash}`);
        }}
        height={height}
        width={height}
        src={fallbackImageUrl ?? `${PINATA_GATE_URI}${imageIPFSHash}`}
        alt={`Image of ${account}`}
        priority
      />
    );
  } else if (account && !imageIPFSHash) {
    return <AccountAvatar address={account} size={height} />;
  } else {
    return (
      <Image
        height={height}
        width={height}
        src="/ImagePlaceholder.png"
        alt={`Placeholder Image`}
        priority
      />
    );
  }
};

export default ProfileImage;

import { useCallback } from "react";
import { useIpfsClient } from "../use-ipfs-client";

export const useIpfsTextUpload = () => {
  const client = useIpfsClient();
  const uploadText = useCallback(
    async (text: string) => {
      try {
        const added = await client.add(text);
        return added.path;
      } catch (e) {
        throw new Error("IPFS Upload failed");
      }
    },
    [client]
  );

  return { uploadText };
};

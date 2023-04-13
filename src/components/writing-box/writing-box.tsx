import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Textarea } from "../textarea";
import styles from "./writing-box.module.css";
import { Title } from "../title";
import { Button } from "../button";
import { useUser } from "@/hooks/use-user";
import { WritingBoxProps } from "./writing-box.types";
import { useIpfsTextUpload } from "@/hooks/use-ipfs-text-upload";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { TCR_DEV } from "@/constants";
import ABI from "../../abis/TCR.json";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";
import { useSnippets } from "@/hooks/use-snippets";

export const WritingBox = ({ characterId }: WritingBoxProps) => {
  const [text, setText] = useState("");
  const [writingToken, setWritingToken] = useState<null | number>(null);
  const [status, setStatus] = useState("idle");
  const { NFTs } = useUser();
  const { uploadText } = useIpfsTextUpload();
  const { refetchAllSnippets } = useSnippets();
  const { refetchSnippetsOfCharacter } = useCharacterSnippets({ characterId });
  const {
    error: contractError,
    write,
    status: writeStatus,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: TCR_DEV,
    abi: ABI,
    functionName: "write",
  });
  const { status: waitStatus, error: waitError } = useWaitForTransaction({
    hash: data?.hash,
  });
  const pending = useMemo(() => status === "pending", [status]);

  const NFTsForWriting = useMemo(
    () =>
      NFTs?.filter((nft) => nft.characterId === characterId && !nft.written),
    [NFTs, characterId]
  );

  const error = useMemo(() => {
    if (text.trim().length < 30) {
      return "At least 50 characters.";
    } else if (text.trim().length > 1000) {
      return "Max 1000 characters.";
    } else {
      return null;
    }
  }, [text]);

  const reset = () => {
    setText("");
  };

  const onSubmit = useCallback(async () => {
    try {
      const textCID = await uploadText(text);
      write?.({ recklesslySetUnpreparedArgs: [textCID, writingToken] });
    } catch (e) {
      console.log({ e });
    }
  }, [text, uploadText, write]);

  useEffect(() => {
    if (NFTsForWriting?.length) {
      setWritingToken(NFTsForWriting[0]?.id);
    }
  }, [NFTsForWriting]);

  useEffect(() => {
    if (writeStatus === "loading" || writeStatus === "success") {
      setStatus("pending");
    }
    if (writeStatus === "success" && waitStatus === "success") {
      setStatus("success");
      reset();
      refetchAllSnippets();

      // refetchSnippetsOfCharacter();
    }
  }, [writeStatus, waitStatus, refetchSnippetsOfCharacter]);

  if (NFTsForWriting?.length === 0) {
    return null;
  }
  return (
    <div className={styles.writingBoxWrapper}>
      <Title size={3}>Continue the story</Title>
      <Textarea
        className={styles.writingBox}
        text={text}
        onChange={(value) => setText(value)}
        disabled={pending}
      />
      <span className={styles.error}>{error ?? ""}</span>
      <Button
        onClick={onSubmit}
        disabled={!!error || pending}
        pending={pending}
      >
        Submit
      </Button>
    </div>
  );
};

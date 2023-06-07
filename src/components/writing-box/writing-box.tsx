import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Textarea } from "../textarea";
import styles from "./writing-box.module.css";
import { Title } from "../title";
import { Button } from "../button";
import { useUser } from "@/hooks/use-user";
import { WritingBoxProps } from "./writing-box.types";
import { useIpfsTextUpload } from "@/hooks/use-ipfs-text-upload";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import ABI from "../../abis/TCR.json";
import { useCharacterSnippets } from "@/hooks/use-character-snippets";
import { useSnippets } from "@/hooks/use-snippets";
import { SelectDropdown } from "../select-dropdown";
import { detectLanguage } from "@/utils/detectLanguage";
import { translateWithDeepl } from "@/utils/translateWithDeepl";
import { Minting } from "../minting";
import pinToPinata from "@/utils/pinToPinata";
import { TCRContract } from "@/utils/TCRContract";

export const WritingBox = ({ characterId }: WritingBoxProps) => {
  const [text, setText] = useState("");
  const [writingToken, setWritingToken] = useState<null | number>(null);
  const [status, setStatus] = useState("idle");
  const { NFTs, fetchNFTs } = useUser();
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
    address: TCRContract,
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
    } else if (text.trim().length > 2000) {
      return "Max 2000 characters.";
    } else {
      return null;
    }
  }, [text]);

  const handleSelect = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    // @ts-ignore
    setWritingToken(e.target.value);
  };

  const reset = useCallback(() => {
    setText("");
    setStatus("idle");
  }, []);

  const handleChange = (val: string) => {
    setText(val);
  };

  const onSubmit = useCallback(async () => {
    try {
      const textCID = await uploadText(text);
      const language = detectLanguage(text);
      let translation;
      let translationCID = "";
      if (language !== "english") {
        translation = await translateWithDeepl(text, "EN");
        translationCID = translation ? await uploadText(translation) : "";
        await pinToPinata(writingToken as number, translationCID, true);
      }
      await pinToPinata(writingToken as number, textCID, false);
      console.log({ textCID, translation, translationCID, writingToken });
      write?.({
        recklesslySetUnpreparedArgs: [textCID, translationCID, writingToken],
      });
    } catch (e) {
      console.log({ e });
    }
  }, [text, uploadText, write, writingToken]);

  useEffect(() => {
    if (NFTsForWriting?.length) {
      setWritingToken(NFTsForWriting[0]?.id);
    }
  }, [NFTsForWriting]);

  useEffect(() => {
    if (writeStatus === "loading") {
      setStatus("pending");
    }
    if (writeStatus === "error" || waitStatus === "error") {
      setStatus("idle");
    }
    if (writeStatus === "success" && waitStatus === "success") {
      reset();
      fetchNFTs();
      refetchAllSnippets();
      refetchSnippetsOfCharacter();
    }
  }, [
    writeStatus,
    waitStatus,
    refetchSnippetsOfCharacter,
    reset,
    refetchAllSnippets,
    fetchNFTs,
  ]);

  if (NFTsForWriting === undefined || NFTsForWriting?.length === 0) {
    return <Minting className={styles.mintingBox} />;
  }
  return (
    <div className={styles.writingBoxWrapper}>
      <Title size={2}>Continue the story</Title>
      {NFTsForWriting?.length > 1 && (
        <SelectDropdown
          options={NFTsForWriting?.map((nft) => nft.id)}
          onSelect={handleSelect}
          disabled={pending}
        />
      )}
      <Title size={3}>{`#${writingToken}`}</Title>
      <Textarea
        className={styles.writingBox}
        text={text}
        onChange={handleChange}
        disabled={pending}
      />

      <span className={styles.error}>{error ?? ""}</span>
      <Button
        onClick={onSubmit}
        disabled={!!error || pending}
        pending={pending}
      >
        {pending ? "..." : "Submit"}
      </Button>
    </div>
  );
};

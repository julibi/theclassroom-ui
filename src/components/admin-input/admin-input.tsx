import React, { useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import { useIpfsTextUpload } from "@/hooks/use-ipfs-text-upload";
import styles from "./admin-input.module.css";
import { Button } from "../button";
import { Textarea } from "../textarea";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import ABI from "../../abis/TCR.json";
import { TCR_DEV } from "@/constants";
import { AdminInputProps } from "./admin-input.types";

export const AdminInput = ({ refetch }: AdminInputProps) => {
  const [text, setText] = useState("");
  const [textIPFSHash, setTextIPFSHash] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState<string | null>(null);

  const { uploadText } = useIpfsTextUpload();
  const {
    error: contractError,
    write,
    status: writeStatus,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: TCR_DEV,
    abi: ABI,
    functionName: "setupCharacter",
    args: [name, textIPFSHash, ""],
  });
  const { status: waitStatus, error: waitError } = useWaitForTransaction({
    hash: data?.hash,
  });

  const nameError = useMemo(() => {
    // TOOD: validate a characters like this does not already exist
    if (name?.trim().length < 1) {
      return "Too short.";
    } else if (name?.trim().length > 20) {
      return "Too long. Max 20 characters.";
    } else {
      return null;
    }
  }, [name]);

  const textError = useMemo(() => {
    if (text?.trim().length < 10) {
      return "Too short.";
    } else if (text?.trim().length > 400) {
      return "Too long. Max 400 characters.";
    } else {
      return null;
    }
  }, [text]);

  const pending = useMemo(
    () => ["confirming", "waiting", "fetching"].includes(status),
    [status]
  );

  const handleChange = (value: string) => {
    setText(value);
  };

  const handleSubmit = useCallback(
    async (evt: React.ChangeEvent) => {
      evt.preventDefault();

      try {
        const textCID = await uploadText(text);
        write?.({ recklesslySetUnpreparedArgs: [name, textCID, ""] });
      } catch (e) {
        console.log({ e });
      }
    },
    [text, uploadText, write, name]
  );

  const reset = () => {
    setText("");
    setTextIPFSHash("");
    setName("");
  };

  useEffect(() => {
    if (writeStatus === "loading" || writeStatus === "success") {
      setStatus("pending");
    }
    if (writeStatus === "success" && waitStatus === "success") {
      setStatus("success");
      reset();
      refetch();
    }
  }, [writeStatus, waitStatus]);

  useEffect(() => {
    if (contractError && contractError?.name !== "UserRejectedRequestError") {
      setError(contractError?.message);
    } else if (waitError) {
      setError(waitError?.message);
    }
  }, [waitError, contractError]);

  return (
    <form className={styles.characterSetupForm}>
      <label htmlFor="character-name" className={styles.label}>
        Character Name
      </label>
      <input
        id="character-name"
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        className={styles.input}
        disabled={status === "pending"}
      />
      <span className={styles.error}>{nameError ?? " "}</span>
      <label htmlFor="character-description">Character Description</label>
      <Textarea text={text} onChange={handleChange} disabled={pending} />
      <span className={styles.error}>{textError ?? " "}</span>
      <Button
        type="submit"
        onClick={handleSubmit}
        text={"Add character"}
        pending={status === "pending"}
        disabled={status === "pending" || !!textError || !!nameError}
      />
      <span className={styles.error}>{error ?? " "}</span>
    </form>
  );
};

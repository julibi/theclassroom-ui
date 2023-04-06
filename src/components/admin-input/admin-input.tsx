import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import cx from "classnames";

import { useIpfsTextUpload } from "@/hooks/use-ipfs-text-upload";
import { useSetupCharacter } from "@/hooks/use-setup-character";
import styles from "./admin-input.module.css";
import { Button } from "../button";

export const AdminInput = () => {
  const [text, setText] = useState("");
  const [textIpfsHash, setTextIpfsHash] = useState("");
  const [name, setName] = useState("");

  const { uploadText } = useIpfsTextUpload();
  const {
    write,
    status,
    error: contractError,
    data,
  } = useSetupCharacter(name, textIpfsHash);

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

  const upload = useCallback(
    async (evt: React.ChangeEvent) => {
      evt.preventDefault();
      try {
        const textCID = await uploadText(text);
        setTextIpfsHash(textCID);
        handleSubmit();
      } catch (e) {
        console.log({ e });
      }
    },
    [text]
  );

  const handleSubmit = useCallback(async () => {
    try {
      write?.();
    } catch (e) {
      console.log({ e });
    }
  }, [textIpfsHash, write]);

  const reset = () => {
    setText("");
    setTextIpfsHash("");
    setName("");
  };

  useEffect(() => {
    if (status === "success") {
      reset();
      console.log("should refetch");
      // refetch stuff
    }
  }, [status]);

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
        disabled={pending}
      />
      <span className={styles.error}>{nameError ?? " "}</span>
      <label htmlFor="character-description">Character Description</label>
      <textarea
        className={cx(styles.descriptionField, styles.input)}
        id="character-description"
        value={text}
        onChange={({ target: { value } }) => setText(value)}
        disabled={pending}
      />
      <span className={styles.error}>{textError ?? " "}</span>
      <Button
        type="submit"
        onClick={upload}
        text={"Add character"}
        pending={pending}
        disabled={pending || !!textError || !!nameError}
      />
      <span className={styles.error}>
        {contractError ? contractError?.message : " "}
      </span>
    </form>
  );
};

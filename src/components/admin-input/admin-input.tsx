import React, { useCallback, useMemo, useState } from "react";
import { useIpfsTextUpload } from "@/hooks/use-ipfs-text-upload";
import { useSetupCharacter } from "@/hooks/use-setup-character";
import styles from "./admin-input.module.css";
export const AdminInput = () => {
  const [text, setText] = useState("");
  const [textIpfsHash, setTextIpfsHash] = useState("");
  const [name, setName] = useState("");
  const { uploadText } = useIpfsTextUpload();
  const { write, status, error } = useSetupCharacter(name, textIpfsHash);

  const pending = useMemo(
    () => ["confirming", "waiting"].includes(status),
    [status]
  );

  const upload = useCallback(async () => {
    try {
      const textCID = await uploadText(text);
      setTextIpfsHash(textCID);
      handleSubmit();
    } catch (e) {
      console.log({ e });
    }
  }, [text]);

  const handleSubmit = useCallback(async () => {
    try {
      write?.();
    } catch (e) {
      console.log({ e });
    }
  }, [textIpfsHash, write]);

  return (
    <div className={styles.characterSetup}>
      <input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type="text"
        disabled={pending}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <button onClick={upload}>{pending ? "..." : "Add character"}</button>
    </div>
  );
};

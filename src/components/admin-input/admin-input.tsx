import React, { useCallback, useMemo, useState } from "react";
import { useContract } from "@/hooks/use-contract";
import ABI from "../../abis/TCR.json";
import { TCR_DEV } from "../../constants";
import { Abi } from "abitype";

export const AdminInput = () => {
  const [text, setText] = useState("");
  const { write, status, error } = useContract({
    address: TCR_DEV,
    abi: ABI as Abi,
    functionName: "configureAdmins",
    args: [[text], [true]],
  });
  const pending = useMemo(
    () => ["confirming", "waiting"].includes(status),
    [status]
  );
  const handleClick = useCallback(() => {
    try {
      write?.();
    } catch (e) {
      console.log({ e });
    }
  }, [write]);
  console.log({ write, error, status, pending });
  return (
    <div>
      <input
        type="text"
        disabled={pending}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <button onClick={handleClick}>{pending ? "..." : "add character"}</button>
    </div>
  );
};

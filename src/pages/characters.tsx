import React, { useEffect, useState } from "react";
import { Folder } from "@/components/folder";
import { CHARACTERS } from "../constants";
import styles from "../styles/Characters.module.css";
import { FolderProps } from "@/components/folder/folder.types";

const Characters = () => {
  const [shuffledCharacters, setShuffledCharacters] = useState<
    FolderProps[] | null
  >(null);

  useEffect(() => {
    const array = CHARACTERS.sort((a, b) => 0.5 - Math.random());
    setShuffledCharacters(array);
  }, []);
  return (
    <div className={styles.characters}>
      <div className={styles.folders}>
        {CHARACTERS.map(
          ({ id, name, birthDate, birthPlace, checkIn, text }) => (
            <Folder
              key={id}
              name={name}
              id={id}
              birthDate={birthDate}
              birthPlace={birthPlace}
              checkIn={checkIn}
              text={text}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Characters;

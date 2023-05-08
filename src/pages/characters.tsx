import React, { useEffect, useState } from "react";
import { CHARACTERS } from "../constants";
import styles from "../styles/Characters.module.css";
import { PatientRecord } from "@/components/patient-record";
import { PatientRecordProps } from "@/components/patient-record/patient-record.types";

const Characters = () => {
  const [shuffledCharacters, setShuffledCharacters] = useState<
    PatientRecordProps[] | null
  >(null);

  useEffect(() => {
    const array = CHARACTERS.sort((a, b) => 0.5 - Math.random());
    setShuffledCharacters(array);
  }, []);
  return (
    <div>
      <div className={styles.folders}>
        {CHARACTERS.map(
          ({ id, name, birthDate, birthPlace, checkIn, text }) => (
            <PatientRecord
              key={id}
              name={name}
              id={id}
              birthDate={birthDate}
              birthPlace={birthPlace}
              checkIn={checkIn}
              text={text}
              withPic
              withButton
            />
          )
        )}
      </div>
    </div>
  );
};

export default Characters;

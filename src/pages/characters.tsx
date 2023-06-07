import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CHARACTERS } from "../constants";
import styles from "../styles/Characters.module.css";
import { PatientRecord } from "@/components/patient-record";
import { PatientRecordProps } from "@/components/patient-record/patient-record.types";
import { useCharacters } from "@/hooks/use-characters";

const Characters = () => {
  const [shuffledCharacters, setShuffledCharacters] = useState<
    PatientRecordProps[] | null
  >(null);
  const { characters } = useCharacters();

  useEffect(() => {
    const array = CHARACTERS.sort((a, b) => 0.5 - Math.random());

    setShuffledCharacters(array as PatientRecordProps[]);
  }, [characters]);

  return (
    <div>
      <div className={styles.folders}>
        {shuffledCharacters?.map(
          ({ id, name, birthDate, birthPlace, checkIn, img }) => (
            <PatientRecord
              key={id}
              name={name}
              img={img}
              id={id}
              birthDate={birthDate}
              birthPlace={birthPlace}
              checkIn={checkIn}
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

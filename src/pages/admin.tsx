import { AdminInput } from "@/components/admin-input";
import React, { useEffect } from "react";
import styles from "../styles/Admin.module.css";
import { Title } from "@/components/title";
import { CharacterCard } from "@/components/character-card";
import { useCharacters } from "@/hooks/use-characters";

const Admin = () => {
  const { characters, fetchCharacters } = useCharacters();

  return (
    <div className={styles.admin}>
      <Title size={1} className={styles.title}>
        Characters
      </Title>
      <ul className={styles.list}>
        {characters?.map((character, idx) => (
          <li key={idx} className={styles.listItem}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      {typeof characters?.length == "number" && characters?.length < 10 && (
        <>
          <Title size={1} className={styles.title}>
            Create New Character
          </Title>
          <AdminInput refetch={fetchCharacters} />
        </>
      )}
    </div>
  );
};

export default Admin;

import Head from "next/head";
import { useCharacters } from "@/hooks/use-characters";
import { Carousel } from "@/components/carousel";
import styles from "@/styles/Home.module.css";

export default function WritingApp() {
  const { characters, fetchCharacters } = useCharacters();

  return (
    <main>
      <Carousel characters={characters} />
    </main>
  );
}

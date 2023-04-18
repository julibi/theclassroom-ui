import Head from "next/head";
import { Inter } from "next/font/google";
import { useCharacters } from "@/hooks/use-characters";
import { Carousel } from "@/components/carousel";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { characters, fetchCharacters } = useCharacters();

  return (
    <main>
      <Carousel characters={characters} />
    </main>
  );
}

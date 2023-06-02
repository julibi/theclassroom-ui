import Head from "next/head";
import { useCharacters } from "@/hooks/use-characters";
import { Carousel } from "@/components/carousel";
import { useAccount } from "wagmi";

export default function WritingApp() {
  const { characters } = useCharacters();

  return (
    <main>
      <Carousel characters={characters} />
    </main>
  );
}

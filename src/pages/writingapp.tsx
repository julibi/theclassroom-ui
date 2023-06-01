import Head from "next/head";
import { useCharacters } from "@/hooks/use-characters";
import { Carousel } from "@/components/carousel";
import { useAccount, useContractRead } from "wagmi";
import { MPContract } from "@/utils/MPContract";
import ABI from "../abis/MoonpageCollection.json";

export default function WritingApp() {
  const { characters } = useCharacters();
  const { address } = useAccount();

  // const { data } = useContractRead({
  //   address: MPContract,
  //   abi: ABI,
  //   functionName: "balanceOf",
  //   args: [address],
  // });
  // console.log({ data });
  return (
    <main>
      <Carousel characters={characters} />
    </main>
  );
}

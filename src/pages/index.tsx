import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getNetwork } from "@wagmi/core";
import { WagmiProvider } from "@/providers/wagmiProvider/wagmiProvider";
import { connect } from "@wagmi/core";
import { injectedConnector } from "@/providers/wagmiProvider/wagmiProvider";
import { getAccount } from "@wagmi/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const test = getNetwork();
  console.log({ test });
  const { address } = getAccount();
  const handleConnect = async () => {
    const result = await connect({
      connector: injectedConnector,
    });
    console.log({ result });
  };

  return (
    <WagmiProvider>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={handleConnect}>connect</button>
        <div>{address}</div>
      </main>
    </WagmiProvider>
  );
}

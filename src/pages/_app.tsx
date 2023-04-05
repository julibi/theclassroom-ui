import { Layout } from "@/components/layout";
import { WagmiProvider } from "@/providers/wagmiProvider/wagmiProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiProvider>
  );
}

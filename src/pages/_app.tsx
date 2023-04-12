import { Layout } from "@/components/layout";
import { Slider } from "@/components/slider";
import { CharactersProvider } from "@/providers/charactersProvider/charactersProvider";
import { SliderProvider } from "@/providers/slider/sliderProvider";
import { SnippetsProvider } from "@/providers/snippetsProvider/snippetsProvider";
import { WagmiProvider } from "@/providers/wagmiProvider/wagmiProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <CharactersProvider>
        <SnippetsProvider>
          <SliderProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Slider />
          </SliderProvider>
        </SnippetsProvider>
      </CharactersProvider>
    </WagmiProvider>
  );
}

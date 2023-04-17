import { Layout } from "@/components/layout";
import { Slider } from "@/components/slider";
import { CharactersProvider } from "@/providers/charactersProvider/charactersProvider";
import { MoonpageProvider } from "@/providers/moonpageProvider/moonpageProvider";
import { UIProvider } from "@/providers/uiProvider/uiProvider";
import { SnippetsProvider } from "@/providers/snippetsProvider/snippetsProvider";
import { UserProvider } from "@/providers/userProvider/userProvider";
import { WagmiProvider } from "@/providers/wagmiProvider/wagmiProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider>
      <MoonpageProvider>
        <CharactersProvider>
          <SnippetsProvider>
            <UserProvider>
              <UIProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
                <Slider />
              </UIProvider>
            </UserProvider>
          </SnippetsProvider>
        </CharactersProvider>
      </MoonpageProvider>
    </WagmiProvider>
  );
}

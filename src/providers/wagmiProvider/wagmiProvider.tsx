import { ReactNode } from "react";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { polygon, polygonMumbai, mainnet } from "@wagmi/core/chains";
import { publicProvider } from "@wagmi/core/providers/public";
import { infuraProvider } from "@wagmi/core/providers/infura";
import { InjectedConnector } from "@wagmi/core/connectors/injected";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
import { CoinbaseWalletConnector } from "@wagmi/core/connectors/coinbaseWallet";
import { WagmiProviderTypes } from "./wagmiProvider.types";

const isProd = process.env.ENVIRONMENT == "PROD";
const { chains, provider } = configureChains(
  // what about dev and mainnet environments?
  [isProd ? polygon : polygonMumbai],

  [
    infuraProvider({
      apiKey: process.env.NEXT_PUBLIC_INFURA_API_KEY as string,
      priority: 0,
      stallTimeout: 1_000,
    }),
    publicProvider({ priority: 1 }),
  ]
);

export const coinbaseConnector = new CoinbaseWalletConnector({
  options: {
    appName: "TheClassroom",
    jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_API_KEY}`,
  },
});

export const injectedConnector = new InjectedConnector({ chains });
export const metaMaskConnector = new MetaMaskConnector({
  chains,
});
export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
  },
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    metaMaskConnector,
  ],
  provider,
});

export function WagmiProvider({ children }: WagmiProviderTypes) {
  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
}

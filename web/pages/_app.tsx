import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { infuraProvider } from "wagmi/providers/infura";

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;

const { chains, provider, webSocketProvider } = configureChains(
  [chain.rinkeby],
  [infuraProvider({ infuraId })]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({ chains }),
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;

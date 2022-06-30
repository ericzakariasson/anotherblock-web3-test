import type { NextPage } from "next";
import Head from "next/head";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { GmButton } from "../components/GmButton";
import { GmCounter } from "../components/GmCounter";
import { useGmCounter } from "../hooks/useGmCounter";

const Home: NextPage = () => {
  const { isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const counter = useGmCounter();

  return (
    <div>
      <Head>
        <title>gm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isConnected ? (
          <>
            <GmCounter counter={counter} />
            <GmButton onSuccess={counter.refetch} />
          </>
        ) : (
          <button onClick={() => connect()}>Connect Wallet</button>
        )}
      </main>
    </div>
  );
};

export default Home;

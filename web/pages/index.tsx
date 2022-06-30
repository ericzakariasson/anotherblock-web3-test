import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useAccount, useConnect, useContractEvent } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { UseContractEventConfig } from "wagmi/dist/declarations/src/hooks/contracts/useContractEvent";
import { GmButton } from "../components/GmButton";
import { GmCounter } from "../components/GmCounter";

import LFG from "../LFG.json";

const Home: NextPage = () => {
  const { isConnected, address } = useAccount();
  const [isMinting, setIsMinting] = useState(false);

  const onWagmi = ([emitter]: [string]) => {
    const isMe = emitter === address;
    if (isMe) {
      setIsMinting(false);
      alert("Wagmi");
    }
  };

  useContractEvent({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    eventName: "Wagmi",
    listener: onWagmi,
  });

  const { connect } = useConnect();

  return (
    <div>
      <Head>
        <title>gm</title>
      </Head>
      <main>
        {isConnected ? (
          <>
            <GmCounter />
            <GmButton onGm={() => setIsMinting(true)} />
            {isMinting && <p>Brewing coffee...</p>}
          </>
        ) : (
          <button onClick={() => connect()}>Connect Wallet</button>
        )}
      </main>
    </div>
  );
};

export default Home;

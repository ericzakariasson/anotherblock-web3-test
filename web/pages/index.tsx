import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useAccount, useConnect, useContractEvent, useDisconnect } from "wagmi";
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

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { disconnect } = useDisconnect();

  return (
    <div className="h-screen p-4 flex flex-col">
      <Head>
        <title>gm</title>
      </Head>
      <header className="flex justify-end">
        {isConnected && (
          <button
            className="text-sm text-slate-300"
            onClick={() => disconnect()}
          >
            {address}
          </button>
        )}
      </header>
      <main className="w-full flex-1 flex flex-col items-center justify-center">
        {isConnected ? (
          <>
            <GmCounter />
            <GmButton onGm={() => setIsMinting(true)} />
            {isMinting && <p className="mt-2">soon (wagmi) 🚀</p>}
          </>
        ) : (
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-6"
            onClick={() => connect()}
          >
            Connect Wallet
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;

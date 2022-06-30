import { BigNumber } from "ethers";
import { FC } from "react";
import { useContractWrite } from "wagmi";
import LFG from "../LFG.json";

export const GmButton: FC = () => {
  const { data, isLoading, isError, write } = useContractWrite({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    functionName: "gm",
  });

  return (
    <>
      <button disabled={isLoading} onClick={() => write()}>
        {isLoading ? "sending..." : "send gm 👋"}
      </button>
      {isError && <p>Somrthing went wrong 🤔</p>}
    </>
  );
};

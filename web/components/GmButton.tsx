import { FC } from "react";
import { useContractWrite } from "wagmi";
import LFG from "../LFG.json";

type GmButtonProps = {
  onSuccess: () => void;
};

export const GmButton: FC<GmButtonProps> = ({ onSuccess }) => {
  const { data, isLoading, isError, write } = useContractWrite({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    functionName: "gm",
    onSuccess,
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

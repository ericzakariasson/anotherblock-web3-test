import { FC } from "react";
import { useContractWrite } from "wagmi";
import LFG from "../LFG.json";

type GmButtonProps = {
  onGm: () => void;
};

export const GmButton: FC<GmButtonProps> = ({ onGm }) => {
  const { isLoading, isError, write } = useContractWrite({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    functionName: "gm",
    onSuccess: onGm,
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

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
      <button
        disabled={isLoading}
        onClick={() => write()}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105 transition focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-6"
      >
        {isLoading ? "sending..." : "send gm 👋"}
      </button>
      {isError && <p className="mt-2">Something went wrong 🤔</p>}
    </>
  );
};

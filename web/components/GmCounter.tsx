import { BigNumber } from "ethers";
import { FC } from "react";
import { useContractRead } from "wagmi";
import LFG from "../LFG.json";

export const GmCounter: FC = () => {
  const { data, isLoading, isError } = useContractRead({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    functionName: "gmCount",
    watch: true,
  });

  if (isError) {
    return <h1>Error 😔</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const count = BigNumber.isBigNumber(data) ? data.toNumber() : 0;

  return (
    <h1 className="text-5xl font-extrabold">
      {count} gm{count === 1 ? "" : "'s"} so far ☕️{" "}
      <span>{count === 0 && "(ngmi)"}</span>
    </h1>
  );
};

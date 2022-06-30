import { BigNumber } from "ethers";
import { FC } from "react";
import { useGmCounter } from "../hooks/useGmCounter";

type GmCounterProps = {
  counter: ReturnType<typeof useGmCounter>;
};

export const GmCounter: FC<GmCounterProps> = ({ counter }) => {
  if (counter.isError) {
    return <h1>Error 😔</h1>;
  }

  if (counter.isLoading) {
    return <h1>Loading...</h1>;
  }

  const count = BigNumber.isBigNumber(counter.data)
    ? counter.data.toNumber()
    : 0;

  return (
    <h1>
      {count} gm{count === 1 ? "" : "'s"} so far ☕️{" "}
      <span>{count === 0 && "(ngmi)"}</span>
    </h1>
  );
};

import { useContractRead } from "wagmi";
import LFG from "../LFG.json";

export const useGmCounter = () => {
  return useContractRead({
    addressOrName: LFG.address,
    contractInterface: LFG.abi,
    functionName: "gmCount",
    watch: true,
  });
};

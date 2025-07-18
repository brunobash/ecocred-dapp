import { useEffect, useState } from "react";
import { ethers } from "ethers";
import EcoCredAbi from "./src/abi/EcoCred.json";

const CONTRACT_ADDRESS = "ENDERECO_DO_CONTRATO_DEPLOYADO";

export function useEcoCred() {
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.getSigner().then(signer => {
        const ecoCred = new ethers.Contract(CONTRACT_ADDRESS, EcoCredAbi.abi, signer);
        setContract(ecoCred);
      });
    }
  }, []);

  return contract;
}
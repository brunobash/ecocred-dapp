import { useState } from "react";
import { useEcoCred } from "../hooks/useEcoCred";

export function EmitCredit() {
  const contract = useEcoCred();
  const [desc, setDesc] = useState("");
  const [hash, setHash] = useState("");

  const handleEmit = async () => {
    if (contract) {
      await contract.emitirCredito(desc, hash);
      alert("Credit emitted!");
    }
  };

  return (
    <div>
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input placeholder="CESS File Hash" value={hash} onChange={e => setHash(e.target.value)} />
      <button onClick={handleEmit}>Emit Credit</button>
    </div>
  );
}
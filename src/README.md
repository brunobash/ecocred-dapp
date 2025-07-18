# EcoCred DApp

## Overview

**EcoCred** is a decentralized application (DApp) for issuing and querying environmental credits, integrating with the CESS Network blockchain. The project uses Solidity smart contracts deployed on CESS (EVM) and can be easily adapted to store metadata or files using CESS decentralized storage solutions (DeOSS/CDN).

### CESS Integration

- **Solidity Smart Contract:** The `EcoCred` contract is deployed directly on the CESS EVM network, allowing environmental credits to be registered in a transparent and auditable way.
- **Ready for Storage:** The `arquivoHashCESS` field allows future integration with CESS DeOSS for decentralized document storage.

---

## Setup Instructions

### Prerequisites

- Node.js v20.x (recommended)
- pnpm
- MetaMask account with balance on CESS testnet/local
- Access to a CESS EVM node (testnet/local)

### Installation

```sh
git clone https://github.com/your-username/ecocred-dapp.git
cd ecocred-dapp/hardhat
pnpm install
```
### Configuration

1. **MetaMask Private Key:**  
   Export your MetaMask private key and add it to the `.env`:
   ```
   DEPLOYMENT_SK=0xyour_private_key
   ```

2. **Network Configuration:**  
   The `hardhat.config.ts` file is already set up for cess-local an cess-testnet.

### Contract Deployment

```sh
pnpm hardhat compile
pnpm hardhat deploy --network cess-testnet
```

### Tests

```sh
pnpm hardhat test
```

---

## How it works

- Users can issue environmenta credits via the EcoCred contract.
- Each credit stores a description, file hash(CESS), issuer, and timestamp.
- Functions are available to query credits and indices by issuer.

---

## Estrutura do Projeto

- `contracts/Ecocred.sol` – Contrato inteligente principal.
- `deploy/01_deploy_ecocred.ts` – Script de deploy automatizado.
- `test/Ecocred.ts` – Testes automatizados.
- `hardhat.config.ts` – Configuração de redes e plugins.

---

## Inovação Técnica

- Direct integration with CESS EVM.
- Ready for integration with DeOSS for decentralized storage.
- Modular code, easy to adapt for other environmental scenarios.

---


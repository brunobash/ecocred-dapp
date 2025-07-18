import { ethers } from "hardhat";
import { expect } from "chai";

describe("EcoCred", function () {
    // Testes para o contrato EcoCred
  it("Deve emitir um crédito ambiental", async function () {
    const [owner] = await ethers.getSigners();
    const EcoCred = await ethers.getContractFactory("EcoCred");
    const ecoCred = await EcoCred.deploy();
    await ecoCred.waitForDeployment();

    await expect(
      ecoCred.emitirCredito("Teste", "hashCESS")
    ).to.emit(ecoCred, "CreditoEmitido");
    
    expect(await ecoCred.totalCreditos()).to.equal(1);
  });

    // Teste para verificar se o crédito foi emitido corretamente
  it("Deve retornar os dados corretos de um crédito", async function () {
  const [owner] = await ethers.getSigners();
  const EcoCred = await ethers.getContractFactory("EcoCred");
  const ecoCred = await EcoCred.deploy();
  await ecoCred.waitForDeployment();

  await ecoCred.emitirCredito("Teste", "hashCESS");
  const credito = await ecoCred.getCredito(0);

  expect(credito.descricao).to.equal("Teste");
  expect(credito.arquivoHashCESS).to.equal("hashCESS");
  expect(credito.emissor).to.equal(owner.address);
});
});
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EcoCred {
    struct CreditoAmbiental {
        string descricao;
        string arquivoHashCESS; // hash do arquivo armazenado na CESS
        address emissor;
        uint256 timestamp;
    }

    CreditoAmbiental[] public creditos;

    event CreditoEmitido(
        string descricao,
        string arquivoHashCESS,
        address emissor,
        uint256 timestamp
    );

    function emitirCredito(string memory descricao, string memory hashCESS) public {
        creditos.push(CreditoAmbiental(descricao, hashCESS, msg.sender, block.timestamp));
        emit CreditoEmitido(descricao, hashCESS, msg.sender, block.timestamp);
    }

    function totalCreditos() public view returns (uint256) {
        return creditos.length;
    }
    function indicesPorEmissor(address emissor) public view returns (uint256[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < creditos.length; i++) {
            if (creditos[i].emissor == emissor) {
                count++;
            }
        }
        uint256[] memory indices = new uint256[](count);
        uint256 j = 0;
        for (uint256 i = 0; i < creditos.length; i++) {
            if (creditos[i].emissor == emissor) {
                indices[j] = i;
                j++;
            }
        }
        return indices;
    }

    function getCredito(uint256 index) public view returns (
        string memory descricao,
        string memory arquivoHashCESS,
        address emissor,
        uint256 timestamp
    ) {
        CreditoAmbiental storage c = creditos[index];
        return (c.descricao, c.arquivoHashCESS, c.emissor, c.timestamp);
    }
}



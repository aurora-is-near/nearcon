//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuroraNearcon is ERC721, Ownable {

    mapping(uint256 => bytes32) tokenIdToHash;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) Ownable() {}

    function mint(
        address to,
        uint256 tokenId,
        bytes memory _data,
        string memory preImage
    ) external {
        require(
            keccak256(abi.encode(preImage)) == tokenIdToHash[tokenId],
            'ERR: invalid passphrase'
        );
        _safeMint(to, tokenId, _data);
    }

    function assignHashToTokenId(
        uint256 tokenId,
        bytes32 hash
    )  external onlyOwner {
        require(
            tokenIdToHash[tokenId] != bytes32(0),
            'ERR: Duplicate token Id'
        );
        tokenIdToHash[tokenId] = hash;
    }
}
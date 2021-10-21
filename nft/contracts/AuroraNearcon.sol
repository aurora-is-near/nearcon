//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuroraNearcon is ERC721, Ownable {
    mapping(uint256 => bytes32) public tokenIdToHash;
    mapping(bytes32 => uint256) public hashToTokenId;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) Ownable() {}

    function mint(
        address to,
        bytes memory data,
        bytes memory preImage
    ) external {
        uint256 tokenId = hashToTokenId[keccak256(preImage)];
        require(
            keccak256(preImage) == tokenIdToHash[tokenId],
            'ERR: invalid passphrase'
        );
        _safeMint(to, tokenId, data);
    }

    function assignHashToTokenId(
        uint256 tokenId,
        bytes32 hash
    )  external onlyOwner {
        require(
            tokenIdToHash[tokenId] == bytes32(0),
            'ERR: Duplicate token Id'
        );
        tokenIdToHash[tokenId] = hash;
        hashToTokenId[hash] = tokenId;
    }

    /// ERC721 Metadata

    function name() external view returns (string memory) {
        return "AZUL (Aurora@Nearcon)";
    }

    function symbol() external view returns (string memory) {
        return "AZUL";
    }
}

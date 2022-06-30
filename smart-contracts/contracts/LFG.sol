// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract LFG {
    event Wagmi(address sender, uint256 count);

    uint256 public gmCount = 0;

    function gm() public {
        gmCount++;
        emit Wagmi(msg.sender, gmCount);
    }
}

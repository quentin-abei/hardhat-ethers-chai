// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.6;

contract Faucet {
    mapping (address => uint) balances;
    
    function withdraw(uint _amount) public  {
        require(_amount <= 10000000000000000);
        (bool sent, ) = payable(msg.sender).call{value: _amount}("");
        require(sent, "Failed to send eth");
    }

   

    receive() external payable{}
}
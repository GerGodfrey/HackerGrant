// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;
import "hardhat/console.sol";

contract onlyDonate {
    address payable public solicitant;  // Adress of the solicitant.
    address [] public good_souls;       // Array of investors.
    mapping(address => uint) public donations; // Amount invested by adress.
    uint256 public goal;                // Goal to be reached.
    uint public timeout;                // Max-Time that the fundraise will be up.
    event StartFunding();
    event Donated(address good_soul, uint donation);
    event Reached();
    event Cashed();     // Goal not reached, but value cashed.
    event Refunded();   // Goal not reached, value refundend to good souls.
    bool public finished_contract;
    string public greeting = "Building something :D. I did not read the full message, sorry Ger.";

    // It points that the goal was not reached on time.
    modifier notReachedAction() {
        require((block.timestamp > timeout && msg.sender == solicitant),"Not allowed to call it.");
        _;
    }

    modifier timesUp() {
        require(block.timestamp < timeout,"Not allowed to call it.");
        _;
    }

    modifier notFinishedContract() {
        require(!finished_contract,"This contract has been finished.");
        _;
    }

// *Constructor
    constructor(uint256 new_goal, uint new_timeout) payable{
        solicitant = payable(msg.sender);
        goal = new_goal;
        timeout = block.timestamp + uint(new_timeout) * 1 weeks;
        finished_contract = false;
        emit StartFunding();
    }

// *Investing
    function donate() public payable timesUp notFinishedContract{
        require(msg.value > 0, "Invalid donation.");
        donations[msg.sender] += msg.value;
        good_souls.push(msg.sender);
        emit Donated(msg.sender, donations[msg.sender]);
        if(address(this).balance >= goal){
            cash_out();
            emit Reached();
        }
    }

// *Cash out all the money raised.
    function cash_out() private {
        finished_contract = true;
        solicitant.transfer(address(this).balance);
    }

// *If the goal is not reached in time, the donations are returned.
    function return_donations() private {
        address good_person;
        uint return_to_do;
        for (uint i = 0; i <= good_souls.length-1 ; i++) {
            good_person = good_souls[i];
            return_to_do = donations[good_person];
            payable(good_person).transfer(return_to_do);
        }
        finished_contract = true;
        emit Refunded();
    }

// *Look at the balance of the contract.
    function total_raised() public view returns (uint){
        return address(this).balance;
    }

//  Maybe this function can be called by an oracle.
//  Right now it can only be called by the solicitant.
// *In case that the goal is not reached.
    function stop(bool cashing) public payable notReachedAction {
        if(cashing){
            cash_out();
            emit Cashed();
        } else{
            return_donations();
            emit Refunded();
        }
    }

// *Time left for completing the fundraise.
    function time_left() public view returns (uint time) {
        uint duration = 0;
        if (block.timestamp < timeout) {
            duration = timeout - block.timestamp;
        }
        return duration;
    }

// *Has the fundraise been completed?
    function is_contract_finished_questionmark() public view returns (bool finito) {
        return finished_contract;
    }

    receive() external payable {
        donate();
    }

}
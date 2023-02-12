// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ArtCompetition {
    // competition variables
    uint256 public deadline;
    uint256 public prizePool;
    address payable public winner;
    address payable public creator;
    address payable private owner;

    mapping(address => uint256) public submissions;

    event CompetitionCreated(address indexed creator);
    event NewSubmission(address indexed submitter, uint256 timestamp);
    event WinnerSelected(address indexed winner, uint256 prize);

    // constructor
    constructor() {
        owner = msg.sender;
    }

    // function for users to create competition
    // we dont make it only owner because anyone can create a competition

    function createCompetition(uint256 _deadline, uint256 _prizePool) public {
        deadline = _deadline;
        prizePool = _prizePool;
        creator = msg.sender;
        emit CompetitionCreated(msg.sender);
    }

    function submit(string memory _art) public {
        require(now <= deadline, "The deadline for submissions has passed.");
        submissions[msg.sender] = now;
        emit NewSubmission(msg.sender, now);
    }

    function sendWinner(address payable _winner) public {
        require(now > deadline, "The deadline for submissions has not passed.");
        require(
            msg.sender == creator,
            "You are not the creator of this competition"
        );
        winner = _winner;
        transfer({value: prizePool, to: winner});
        emit WinnerSelected(winner, prizePool);
    }
}

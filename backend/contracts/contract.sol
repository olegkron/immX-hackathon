pragma solidity ^0.6.12;

import "https://github.com/Immutable-Labs/immutablex-contracts-library/blob/master/contracts/ImmutableX.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract ArtCompetition {
    using SafeMath for uint256;
    
    uint256 public deadline;
    uint256 public prizePool;
    address public winner;
    mapping (address => uint256) public submissions;
    event NewSubmission(address indexed submitter, uint256 timestamp);
    event WinnerSelected(address indexed winner, uint256 prize);
    ImmutableX immutablex;

    constructor(uint256 _deadline, uint256 _prizePool) public {
        deadline = _deadline;
        prizePool = _prizePool;
        immutablex = ImmutableX.create();
    }

    function submit(string memory _art) public {
        require(now <= deadline, "The deadline for submissions has passed.");
        submissions[msg.sender] = now;
        emit NewSubmission(msg.sender, now);
    }

    function selectWinner() public {
        require(now > deadline, "The deadline for submissions has not passed.");
        uint256 maxTime = 0;
        for (address submitter in submissions) {
            if (submissions[submitter] > maxTime) {
                maxTime = submissions[submitter];
                winner = submitter;
            }
        }
        winner.transfer(prizePool);
        emit WinnerSelected(winner, prizePool);
        immutablex.mint(winner, prizePool, _art);
    }
}

//SPDX-License-Identifier: MIT
pragma solidity^0.8.19;


contract chai {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
        // hello
    }
}

// // contract chai{
// //     struct Memo{
// //         string name;
// //         string message;
// //         uint timestamp;
// //         address from;
// //     }

// // Memo[] memos;
// // address payable owner;

// // constructor(){
// //     owner = payable (msg.sender);
// // }

// // function buyChai(string memory name, string memory message) public payable{
// //     require(msg.value>0,"please pay greater then 0 ether");
// //     owner.transfer(msg.value);
// //     memos.push(Memo(name,message,block.timestamp,msg.sender));
// // }

// // function getMemos() public view returns(Memo[] memory){
// //     return memos;
// // }
// // }
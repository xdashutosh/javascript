"use strict";
const friends = ["sagar", "arjit", "akshat"];
const friend = new Array("sagar", "yash", "arjit");
console.log(friends[1]);
console.log(friend[1]);
console.log(friend.length);
//array is mutable
const mydata = new Array("ashutosh", 2021 - 2004, friend);
console.log(mydata[mydata.length - 1][2]);

//array operaton--methods

friend.push("abhinav"); //return  new length
friend.unshift("akhil"); //add at first place
console.log(friend);
friend.pop(); //return last poped element
friend.shift(); //return first poped element
console.log(friend);

console.log(friend.indexOf("arjit")); //return index no
console.log(friend.includes("ravi")); //return true if present else false
if (friend.indexOf("ravi") + 1) {
  console.log("you are my friend");
} else {
  console.log("not present");
}

//empty arrays
const emp = [];

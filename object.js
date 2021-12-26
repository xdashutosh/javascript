"use strict";
//objects are mutable
const mydata = {
  name: "ashutosh",
  dob: 2004,
  frinds: ["sagar", "yash", "arjit"],
  job: "software developer",
  intro: `hey i am ${this.name} and my job is ${this.job}. my friends are ${this.frinds}.`,
  gift: (myson) => {
    console.log(`${myson} is my son!`);
  },
};
console.log(mydata.frinds[2]);
console.log(mydata.dob);
console.log(mydata.intro);
console.log(mydata.gift(mydata.frinds[1]));

// const know= prompt('want to know about me,job,name,dob');
// console.log(mydata[know]);

mydata.job = "developer";
console.log(mydata.job);

mydata.location = "india";
console.log(mydata.location);
console.log(mydata);

//loop
const fruits = new Array("banana", "papaya", "apple", "pineapple");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

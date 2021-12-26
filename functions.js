"use strict";

//function
//method 1 function declartion

// log();--can call before declartion

function sum(a, b) {
  return a + b;
}

let c = sum(2, 7);
console.log(c);

function log() {
  console.log("hey! ashutosh...");
}

log();

//method 2--anonymous function--function expression..cannot call before intializtion due to hoisting

// console.log(`my age is ${age(2004)}`);

const age = function (birthyear) {
  return 2021 - birthyear;
};

console.log(`my age is ${age(2004)}`);

// method 3 --arrow function

const calage = (dob) => 2021 - dob;

console.log(calage(2001));

const add = (a, b) => {
  return a + b;
};

console.log(add(12, 10));

//function calling other function

const days = (year) => {
  return year * 365;
};

const ageindays = (dob) => {
  const ageis = 2021 - dob;
  return days(ageis);
};

console.log(ageindays(2004));

function minus(a, b) {
  return a - b;
}

const less = (c, d) => {
  return minus(c, d);
};
console.log(less(10, 4));

//coding challange 1

const calavg = (a, b, c) => {
  return (a + b + b) / 3;
};
const checkwinner = (avgkoalas, avgdolphins) => {
  const iswinner = 2 * avgkoalas <= avgdolphins;
  if (iswinner) {
    console.log("Dolphin wins!");
  } else if (avgkoalas >= 2 * avgdolphins) {
    console.log("koalas wins!");
  } else {
    console.log(`MATCH DRAW!`);
  }
};

const avgko = calavg(44, 23, 71);
const avgdol = calavg(65, 54, 49);

checkwinner(avgko, avgdol);

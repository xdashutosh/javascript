"use strict";
//slice method
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(-2));
console.log(arr.slice(2, 6));
console.log(...arr);

//splice-mutate the arrays--return deleted array
console.log(arr.splice(4));
console.log(...arr);

//reverse-mutate
console.log(...arr.reverse());
console.log(...arr);

//concate
const double = arr.concat(arr);
console.log(...double);

//join
console.log(arr.join("+"));

//for each40
const transections = [200, 54, -98, 87, -67, -120, 80, 2301];

const passbook_entry = (each_transection, i, arr) => {
  console.log(`entry(${i + 1})`);
  if (each_transection > 0) {
    console.log(`you deposited ${each_transection}`);
  } else {
    console.log(` you withdrew ${Math.abs(each_transection)}`);
  }
};

transections.forEach(passbook_entry);
//on map-fun(value,key,map)
const rate = new Map([
  ["apple", 180],
  ["banana", 50],
  ["orange", 40],
]);

rate.forEach((value, key, map) => {
  console.log(`fruit:${key},rate:Rs ${value}`);
});

//map,filter,reduce
const rupetodollar=78;
const dollar_trans=transections.map((each_ruppes)=>{
return each_ruppes*rupetodollar; 
});
console.log(dollar_trans);

const username="ashutosh chaudhary";
const user=username.split(" ").map((name=>{
  return name[0].toUpperCase();
})).join("");
console.log(user);


const deposit=transections.filter((eachtran)=>{
return eachtran>0&&eachtran!==80;
});
console.log(deposit);

const movements=[10,20,-15,5];
const FD=1000;
const balance=movements.reduce((acc,curr)=>{
return acc+=curr;
},FD);
console.log(balance);

//flat ,some,every,finindex are some methods

//sort-mutate
const friends=["ashu","sagar","arjit","akshat"];
console.log(friends.sort());
console.log(transections.sort((pre,next)=>{
return pre>next?true:false;
}));

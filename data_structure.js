"use strict";

//ARRAY DESTRUCTURING*************************************

let friends = ['arjit','akshat','sagar','abhinav'];
let[code,,,real]=friends;
console.log(`my code friend is ${code} and my real life friend is ${real}`);

//swaping 
[code,real]=[real,code];
console.log(`my code friend is ${code} and my real life friend is ${real} (swaped)`);

//returning diff value from a function

let foodhouse={
name:"foodcourt",
    starters:['chilli potatoes','panner tikka'],
    main:['malai kofta','dal','tandori'],
    order:function(starterindex,maincourseindex){
return [this.starters[starterindex],this.main[maincourseindex]];
    },

timing:{

    workingdays:{
        day:10,
        night:12,
    },

    weekend:{
        day:8,
        night:2,
    },

}

};


console.log(foodhouse.order(1,2));

let [start,main]=foodhouse.order(1,2);
console.log(`my starter is ${start} and my main course is ${main}`);

//nested array 

const nested=[1,2,[3,4]];
const[i,,[k,l]]=nested;
console.log(i,k,l);


//DESTRUCTURING OBJECTS****************************************

const{name,timing,starters}=foodhouse;
console.log(name,timing,starters);
//setting own name to obejct methods
const {name:restname,timing:openhours,starters:foodtype=[],menu=[]}=foodhouse;
console.log(restname,openhours,menu);


//SPREAD OPERATOR***********************************************
//not work in templete literal
//combines many array together

const arr1=[1,2];
const arr2=[3,4];
const arr3=[5,6];

const finalarray=[...arr1,...arr2,...arr3,7,8];
console.log(...finalarray);

const newmenu=[...foodhouse.main,'mix-veg',...starters];
console.log(newmenu);

const str="ashu";
const letter=[...str,"","chaudhary"];
console.log(...letter);

//function use fof spread operator
const pasta=(price,ing,size)=>{
console.log(`you got a ${size} pizza worth ${price} with ${ing}!`);
}
const takeorder=[prompt('price!'),prompt('ingrident'),prompt('size')];
console.log(takeorder);

pasta(...takeorder);


const foodandfun={...foodhouse,pizza:pasta};
console.log(foodandfun);

foodandfun.pizza();


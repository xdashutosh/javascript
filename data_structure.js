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

//function use of spread operator
const pasta=(price,ing,size)=>{
console.log(`you got a ${size} pizza worth ${price} with ${ing}!`);
}
const takeorder=[prompt('price!'),prompt('ingrident'),prompt('size')];
console.log(takeorder);

pasta(...takeorder);


const foodandfun={...foodhouse,pizza:pasta};
console.log(foodandfun);

foodandfun.pizza();

//REST OPERATOR********************************************
// divide single array into parts
//work before assignment operator--left side
const [a,b,...other]=[1,2,3,4,5,6,7];
console.log(other);

//function overloading in rest pattern

const add=function(...number)
{
    let sum=0;
    for (let i = 0; i < number.length; i++) {
        sum+=number[i];
        
    }

    console.log(sum);
}


add(1,2,3);
add(4,3,6,8);

for(const no of other) console.log(no);


//object literals advanced

const person={
sex:"male",
height:"6ft",
fitness:true
};

const student={
name:"ashutosh",
class:"btech",
intro:function(){
    console.log(`i am ${this.name} and i got a course of ${this.class}`);
},

person

};


console.log(student);

//OPTIONAL CHAINING**********************************************
const house={
    char:2,
    table:1,
    AC:2,
    name:"chaudhary house",
    color:"voilet and red",
    rooms:{
        bedroom:{
            color:"white",
            tv:true,
        },

        guestroom:{
            color:"orange and cream",
            tv:false,
        }
    }


};

// console.log(house.rooms.myroom.color);//output is undefined and error so to check before color other pro are prsent? chaining used
//with optional chaining
console.log(house.rooms?.myroom?.color);//no error only undefined

//itration over objects keys,values

for(const room of Object.keys(house.rooms))
{
    console.log(room);
}

const no_of_room=(Object.keys(house.rooms)).length;
console.log(no_of_room);

for(const room of Object.values(house.rooms))
{
    console.log(room);
}


//SETS AND MAPS***********************************************************
const unique_num=new Set([1,2,2,3,6,8,6]);
console.log(unique_num);

for(const uno of unique_num)
{
    console.log(uno);
}

console.log(unique_num.has(9));
console.log(unique_num.add(9));
console.log(unique_num.has(9));

console.log(`number of letters in my name is ${new Set("ashutosh").size}`);


const rest=new Map();
rest.set('name','biggies');
rest.set(1,"noida,up").set(2,"meerut,up");

console.log(rest);

console.log(rest.get('name'),rest.get(2));
rest.delete(1);
console.log(rest);

//strings
const plane="A230 kingfish";
for(const word of plane) console.log(word);
console.log(plane.length);
const numb="123456"
console.log(numb.slice(numb.indexOf('2'),numb.indexOf('6')));

//trim
const id=" aShu@ch.Io";
const correectid=id.toLowerCase().trim();
console.log(correectid);

//replace

const announcementt="raju is a good boy. raju is a programmer and raju loves to learn lot of things.";
const replaced_annoucement=announcementt.replace(/raju/g,'ashutosh').toUpperCase();
console.log(replaced_annoucement);

//boolen

const emailid=prompt('enter you email id');
const check_email=emailid.includes("@gmail.com") || emailid.includes(".ac.in");
if (check_email) {
    console.log("email registerd! congrats!");
}
else{
    console.log("email  not registerd! not valid email!");
}

const keywords="2variable";
if (keywords.startsWith('_') || keywords.startsWith(Number)) {
    console.log("invalid! keyword");
}


//split
const fullname="ashutosh chaudhary";
const[firstname,lastname]=fullname.split(" "); 
console.log(`hey i am ${firstname} and my sername is ${lastname}`);

//all method in a single function
const first_upper=(para)=>{
const word_array=para.split(" ");
const newpara=[];
for(const each_word of word_array)
{
newpara.push(each_word[0].toUpperCase()+each_word.slice(1));//merge except 0th 
}

console.log(newpara.join(" ").replace('Is','is'));

}


first_upper("my name is ashutosh chaudhary");


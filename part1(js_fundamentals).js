

console.log('hey there');
let myname="ashutosh";
let age=18;
let married =false;
console.log(myname);
console.log(age);
console.log(married);
console.log(typeof(age),typeof(myname),typeof(married));
//variable can be update
age=20;
console.log(age);
let dontknow;
console.log(typeof(dontknow));
dontknow=null;
console.log(typeof(dontknow));

//varible can aslo be defined as var and const-constant
var newvar=23;
console.log(newvar);

const constantvar=12;
// constantvar=10; not possible
console.log(constantvar);

// aslo..but not a good practice 
firstname="ashutosh";
console.log(firstname);

const firstName="ashutosh";
const lastName="chaudhary";
console.log(firstName+" "+lastName);

console.log(age>newvar);
console.log(age>constantvar);

//condtion can be stored
 const islarge=age>newvar;
 console.log("we got age value in large is ",islarge);


//coding challange #1
const MarkWeight=78;
const JohnWeight=92;

const Markheight=1.69;
const JohnHeight=1.95;

const BMImark=MarkWeight/(Markheight**2);
const BMIjohn=JohnWeight/(JohnHeight**2);

const ismarkhigh=BMImark>BMIjohn;
console.log(BMIjohn,BMImark);
console.log(ismarkhigh);

//strings-template literals

const fullname="i am "+firstName+" and i am "+age+" years old";
console.log(fullname);
//easier way --
console.log(`i am ${firstName} and i am ${age} years old`);

//conditions

const aged=19;
const isoldenough=aged>=18;
if (isoldenough) {
    console.log("you are ready to start driving!");
}
else{
    console.log(`you are not old enough!`);
}

//coding challange #2

if (BMIjohn>BMImark) {
    console.log(`john (${BMIjohn}) has higher bmi than mark(${BMImark})`);
}
else{
    console.log(`mark (${BMImark}) has higher bmi than john(${BMIjohn})`);

}

//type conversion and type coercion

//type conversion
const inputage='21';
console.log(inputage+12);//concate but we want real add 
console.log(Number(inputage)+12);
console.log(Number('ashu'));
console.log(typeof NaN);
console.log(String(12),12,typeof String(12),typeof 12);

//type coercion
console.log("i am "+18+" years old");
console.log('23'-'3'-10*'3');
//when string + number than concat other wise they perform operation by type coresion

//truthy and falsy values-falsy('',null,NaN,undefined,false,0)
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean({}));//empty object
const s="";
let a;
let b="ashu";

if (String(b)) {
    console.log(`you have entered something!`);
}
else{
    console.log(`you have not entered anything yet!`);
}

// const favfruit=prompt(`you favourite fruit?`);
// console.log(favfruit);

// == (loose equator)  ===(strict equator *always try to use it)

//logical operators-and(&&) or(||) not(!) xor(^)

//switch statement

//ternary oprator--> 
const z=11;
z>=18? console.log("you can have a drink"):console.log("just take some water!");

//expression-produce value or its an operaton like a+b,a-b etc... ternary operator is expression 
//statment-sentences or big piece of code like class or function are statment like if else switch aslo and many more
//we can not put statment in template literals

//coding challange #3 (last of the section 1)

let bill=275;
bill>=50 && bill<=300?tip=(15/100)*bill:tip=(20/100)*bill;
console.log(`the bill was ${bill}, the tip was ${tip}, total bill is ${tip+bill}`);

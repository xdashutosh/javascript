// "use strict";

//execution context-1.scoping 2.hoisting 3.this keyword

//scoping
const sum = (a, b) => {
  const sum = a + b;
  const printsum = () => {
    console.log(`hi ${name}! the sum is ${sum}`);
  };

  printsum();
};
// printsum(); not accisible in global scope
const name = "ashutosh"; //it can be access in any scope in whole program as its a global variable
sum(4, 5);

//hoisting -using variable before their declartion..
// hoisted - function declartion , var ...not-let and const and arrow function

console.log(friend);
var friend = "sagar";


//function expression and arrow function 

// console.log(add(3,4));--OUTPUT-cant accses

 const add=function(x,y)
{
return x+y;
}

//function declartion
console.log(sub(7,3));

function sub(a,b){
  return a - b;
}

//this keyword  does not work with arrow function

const ashu={
  name:"ashutosh", 
  dob: 2004,
  intro:function(){
    console.log(`i am ${this.name} and my dob is ${this.dob}`);
  }
};

ashu.intro();

console.log(this.friend);

document.querySelector(".clickit").addEventListener('click',()=>{
document.querySelector('.thiskey').textContent="click you!";

});



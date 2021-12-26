"use strict";

const intr = document.querySelector(".intro");
console.log(intr.textContent);

//manipulating html content from js
document.querySelector(".intro").textContent = "i changed this using js file";
let valueof = Number(document.querySelector(".guess").value);
console.log(valueof);

if (valueof < 0) {
  document.querySelector(".intro").textContent = "please enter +ve number!";
}
console.log(typeof valueof);



//event listner-click,mouse move,key press etc


document.querySelector(".click").addEventListener('click',()=>{

    document.querySelector(".click").textContent = "cancel";
console.log(valueof,typeof valueof);
    
if (!valueof) {
    document.querySelector(".eve").textContent="not a number!";
    
}
else{
        document.querySelector(".eve").textContent="you guseed it!";
}


});


//manipulating css styles
//document.querySelector("id or class").style.css_property="same as we define in css"

document.querySelector('body').style.backgroundColor="red";



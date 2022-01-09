"use strict";

const intr=(message)=>{
  document.querySelector(".intro").textContent=message;
}



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
    document.querySelector("body").style.color="white";
    document.querySelector('body').style.backgroundColor="black";

    //always make function of those document which are repeating in the code...this is dry rule!!

    //hiting differnt elements with same classes..

    //if we use queryselector for a group of element of same classes we will only get first element ..so we use queryselectoraAll

    //to get all of thm we will itrate
 const butt= document.querySelectorAll('.btn');
 console.log(butt);
console.log(butt.length);

//loop holding each button


const hidbox=document.querySelector(".info");
const close=document.querySelector(".close");
const body=document.querySelector(".overlay");
console.log(hidbox.classList);

 for (let i = 0; i < butt.length; i++) {
   butt[i].addEventListener('click',()=>{
     //mainpulating classes from js
     hidbox.classList.remove("hidden");
     body.classList.remove("overlay");

   });
   
 }

 const closebox=()=>{
  hidbox.classList.add("hidden");
  body.classList.add("overlay");
 }

 close.addEventListener('click',closebox);

 

 //handling keypress events
 //as the keyboard keys work globally in whole document so we use eventlistner to document

 document.addEventListener('keydown',()=>{
   console.log("A key was pressed!");

closebox();

 });
 
 //but we want a specific key to action so we pass object as an argument in function on clicking and we get object of that key 

 document.addEventListener('keydown',(keygroup)=>{
  console.log("A key was pressed!");
  console.log(keygroup);
  console.log(keygroup.key);
  if (keygroup.key=="Escape") {
    closebox();
  }
  else if (keygroup.key=="Insert") {
    intr("printingdocument....");
  }

});







 

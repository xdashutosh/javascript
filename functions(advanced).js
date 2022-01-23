"use strict";

//default parameter
const ticekts=(train="express",numofpassanger=1 ,fair=100*numofpassanger)=>{

    // ES5 WAY
    // train||=express;
    // fair||=100;
    // numofpassanger||=1;

console.log(`${train} has been departed its fair is ${fair} rupees for ${numofpassanger} passangers!`);

}

ticekts("new delhi express",3);


//first class and higher order function
 //argument or return is aslo a function

 const add2=(a,b)=>{
return a+b;
 }

 const add3=(c,add)=>{
  return c+add;   
 }

 const takevalue=(third,func)=>{
return add3(third,func);
 }

 console.log(takevalue(3,add2(6,1)));

 // call bind and apply methods
   
 const kingfisher={
     flight:"kingfisher",
     code:"KF",
     bookings:[],
     book(flightnum,name){
         console.log(`${name} booked a seat on ${this.flight} its code is ${flightnum}${this.code}`);
         this.bookings.push({
             name:name,
             code:this.code+flightnum
         });
     }
 };

 const vmfly={
     flight:"vmfly",
     code:"vf",
     bookings:[]
     //now to follow dry rule we cannot just copy book function although we can apply 2 functions-call,apply,bind....
 }



 kingfisher.book(121,"ashutosh chaudhary");
 kingfisher.book(141,"arjit malik");
 console.log(kingfisher.bookings);

kingfisher.book.call(vmfly,221,"sagar rana");
 console.log(vmfly.bookings);


 const bookvm=kingfisher.book.bind(vmfly,111);
 bookvm("yash chaudhary");
 bookvm("akshat jain");


 //function those can be invoked only once

 const greet=()=>{
     console.log("hey ashutosh chaudhary!");
 }
 greet();
 greet();

 (function()
 {
    console.log("hey ashutosh chaudhary!"); 
 })();


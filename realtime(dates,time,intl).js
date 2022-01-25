"use strict";
//numbers
console.log(Number.parseInt("30px", 10));
console.log(Number.parseFloat("5.12rem"));
console.log(Number((.1+.2).toFixed(1)));
//math and rounding
console.log(Math.sqrt(9));
console.log(64 ** (1 / 3));
const arr = [1, 2, 4, 5, 10];
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log(Math.PI);
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.round(23.8))
console.log(Math.round(23.4))

console.log(Math.floor('23.8'))
console.log(Math.ceil(23.8))

//remainder operator
console.log(123%10);

console.log(Number.MAX_SAFE_INTEGER);
//bigint-n
console.log(87298239897848080283080n);
console.log(20n==20);

//dates
const today=new Date(2001,4,25,4,34,12);
console.log(today);
console.log(new Date());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.toISOString());

console.log(new Date("2001-05-24T23:04:12.000Z").getFullYear());

//internationlize

console.log(`as of ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);

const rightnow=new Date();
const datestyle={
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
    month:"long",
    day:"2-digit",
    year:"numeric",
    weekday:"long",
};

console.log(new Intl.DateTimeFormat('hi-IN',datestyle).format(rightnow));

const belong=navigator.language;
console.log(belong);
console.log(new Intl.DateTimeFormat(belong,datestyle).format(rightnow));

const sum=6178+7761;
console.log(sum);
const digitsepeated=new Intl.NumberFormat("en-US").format(sum);
console.log(digitsepeated);

//timers

setTimeout(()=>console.log("hey are you mad!"),3000);

const time=document.querySelector(".time");
let timeli =120;
const logout=setInterval(() => {
    const min=String(Math.trunc(timeli/60)).padStart(2,0);
    const sec=String(timeli%60).padStart(2,0);
    time.textContent=`${min}:${sec}`;
    timeli--;
    if (timeli==0   ) {
        clearInterval(logout);
    }
}, 1000);


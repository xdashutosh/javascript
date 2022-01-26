console.log("hey there!");
//selecting element
console.log(document.getElementsByTagName('button'));
console.log(document.querySelectorAll('button'));

//creating and inserting elements
const area=document.querySelector(".todolist");
const todo=document.querySelector(".todo");
todo.addEventListener("click",()=>{
const list=document.createElement("div");
list.classList.add("work");
area.prepend(list);
console.log("clicked");
});





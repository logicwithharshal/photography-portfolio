const sidebar = document.querySelector(".sidebar");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
sidebar.classList.remove("open");
});

/* LOADER */

window.addEventListener("load", () => {

document.getElementById("loader").style.display="none";

});

/* TYPING EFFECT */

const text =
"Wedding • Nature • Portrait • Commercial";

let index = 0;

function type(){

if(index < text.length){

document.querySelector(".typing").textContent +=
text.charAt(index);

index++;

setTimeout(type,100);

}

}

type();

/* BACK TO TOP */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}
else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});
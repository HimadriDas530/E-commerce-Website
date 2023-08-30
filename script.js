// Script for navigation bar
let bars= document.querySelectorAll(".bar");
let navbar= document.querySelector("#navbar");

for(let bar of bars){
    bar.addEventListener("click",()=>{
        navbar.classList.toggle("show");
    })
}

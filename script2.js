var mainImg= document.querySelector("#mainImg");

var smallImg= document.querySelectorAll(".small-img");

// smallImg[0].onclick = ()=>{
//     mainImg.src = smallImg[0].src;
// }

// for(let small of smallImg){
//     small.addEventListener("click",()=>{
//         mainImg.src = small.src;
//     })
// }

smallImg.forEach((el)=>{
    el.addEventListener("click",()=>{
        mainImg.src = el.src;})
});
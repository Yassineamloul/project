const num7 = document.getElementById("n7");
const num9 = document.getElementById("n9");
const typed = document.getElementById("currentType");  

num9.addEventListener("click",()=> display(9));

function display(a) {
    typed.innerHTML = " ";
    typed.innerHTML = a;
} 


const addNums = [];
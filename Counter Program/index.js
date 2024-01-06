
//Counter Program
const countBtn = document.getElementById("countLabel");
let count = 0;



document.getElementById("decreaseBtn").onclick = function(){
    count--;
    countBtn.textContent = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    countBtn.textContent = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count++;
    countBtn.textContent = count;
}

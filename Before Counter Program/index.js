/*
console.log("I like pizza!");
let x = 8;
console.log(x);

console.log("You are", x);

document.getElementById("p1").innerHTML = "Hello " + x;
*/

document.getElementById("myH1").textContent = "Hello ";

const PI = 3.14159
let radius;
let circum;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    //s
    radius = Number(radius);
    circum = 2 * PI * radius;
    document.getElementById("myH3").textContent = circum + "cm";
}
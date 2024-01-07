
//Math = built-in object that provides a 
//       collection of properties and methods

console.log(Math.PI); //gives pi
let x = 3.99
let y = 2
let z;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x, y); // x ^ y
z = Math.sqrt(x);
z = Math.log(x);
// there is also sin, cos, and tan
// abs, max, min

console.log(z);

let randomNum = Math.random();

// if we wanna roll a dice between 0-6
randomNum = Math.floor(Math.random() * 6);
// by adding one we can have it between 1-6 
//randomNum = Math.floor(Math.random() * 6) + 1;

//so we can have it between 1-100
//randomNum = Math.floor(Math.random() * 6) + 1;

//const min = 50;
//const max = 100;

//the problem with doing this is we are multiplying it by 100 and adding 50
//we need to have it between 50-100
//randomNum = Math.floor(Math.random() * max) + min;
//randomNum = Math.floor(Math.random() * (max- min)) + min;
//now we can have it correct



console.log(randomNum);


//Random Number Generator
const min = 1;
const max = 6;
let randomNum1, randomNum2, randomNum3;

document.getElementById("rollBtn").onclick = function(){
    randomNum1 = Math.floor(Math.random()* max) + min;
    randomNum2 = Math.floor(Math.random()* max) + min;
    randomNum3 = Math.floor(Math.random()* max) + min;
    document.getElementById("label1").textContent = randomNum1;
    document.getElementById("label2").textContent = randomNum2;
    document.getElementById("label3").textContent = randomNum3;
}
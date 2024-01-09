
const min = 1;
const max = 100;
const RANDOM = Math.floor(Math.random() * (max - min + 1)) + min;
//Math.random is random number from 0-1
//then its multiplied by the the number between the max and the min
// add it by 1 so its not excluding the maximum number
// since it would be 1-99
// then add the minimum to make sure its not a number less than the minimum

let attempts = 0;
let input;
let running = true;


console.log(RANDOM); //use to test
while(running){

    input  = window.prompt(`Guess the number between ${min} and ${max}`);
    input = Number(input);

    if (isNaN(input)){
        window.alert("Please enter a valid number");
    }
    else if (input > max || input < min) {
        window.alert(`Enter a number between ${min} - ${max}`)
    }
    else {
        attempts++;
        if (input < RANDOM){
            window.alert(`${input} is less than the number`);
        }
        else if (input > RANDOM){
            window.alert(`${input} is greater than the number`);
        }
        else {
            window.alert(`${input} is the right number. You took ${attempts} attempts.`)
            running = false;
        }
        
        
    }
}

/* Ternary Operators
function isEven(number){

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}
*/

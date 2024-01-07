

const input = document.getElementById("myText");
const submit = document.getElementById("submit");
const response = document.getElementById("label2");
let age;

submit.onclick = function(){
    age = input.value;
    age = Number(age); 
    //must add this as the value will be in string so we need to change it

    if (age >= 100){
        response.textContent = "Over 100 please resubmit.";
        // having this first because no one can enter over 100
    }
    else if (age == 0){
        response.textContent = "You can't be 0 years old";
        // this is a unique case as no one can enter if they are 0
    }
    else if (age >= 18){
        response.textContent = "You can enter the site";
        // this is when they can enter as it is valid
    }
    else if (age < 0){
        response.textContent = "Under 0 please resubmit.";
        // this is a troll as no one is under 0
    }
    else{
        response.textContent = "You must be 18+ to enter this site";
        //anything else we should let them know how to get in the site
    }
}
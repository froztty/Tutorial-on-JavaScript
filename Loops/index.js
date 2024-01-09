// while loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}

/*
//loggedIn = true;
do{
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)
*/

const names = ['john', 'bob', 'mary', 'joe'];

/*
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
        if (i === 3) break;
}

for (name of names) console.log(name);
*/

const user = { firstName: 'John', lastName: 'Doe'};
for (key in user) console.log(user[key]);

// same as console.log(user[firstName])
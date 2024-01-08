// Method Chaining = Calling one method after another
//                                    in one continuous line of code.

let username = window.prompt("Enter your username: ");

// ----- NO METHOD CHAINING -----
/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);






// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)

// ------------ EXAMPLE 1 ------------
const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

console.log(firstName);
console.log(lastName);

// ------------ EXAMPLE 2 ------------

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);







// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//userName = userName.repeat(3);
//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
//let result = userName.includes(" ");
//phoneNumber = phoneNumber.replaceAll("-", "");
//phoneNumber = phoneNumber.padStart(15, "0");
//phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);
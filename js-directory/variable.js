// Create a program that declares three variables: your name, your age, and your favorite programming language. Then log a sentence using all of them.

const myName = "Oki Hendrawan";
let myAge = 16;
let favProgrammingLanguage = ["JavaScript"];

const biodataBtn = document.querySelector('#biodata-btn');
const paraBiodataBtn = document.querySelector('#para-biodata-button');

biodataBtn.addEventListener('click', () => {
    console.log("function is running..");

    paraBiodataBtn.textContent = `My name is ${myName} and I am ${myAge} years old. My programming language favorite is ${favProgrammingLanguage[0]}`;
});

// Declare a variable for the number of books you’ve read this year. Later, update it twice as if you've finished more books. Log the final result.

let totalBooks = 4;
totalBooks = totalBooks + 2;

const totalBooksBtn = document.querySelector('#total-books-btn');
const paraTotalBooks = document.querySelector('#para-total-books');

totalBooksBtn.addEventListener('click', () => {
    console.log("Function is running...");

    paraTotalBooks.textContent = `I have a hobby of reading, and this year i have read ${totalBooks} different books.`
});

// Create a variable named item. First assign it a number, then a string, then a boolean. Log it each time to see what’s stored.

let item = 16;

const numberDataType = document.querySelector('#number-data-type');
const stringDataType = document.querySelector('#string-data-type');
const booleanDataType = document.querySelector('#boolean-data-type');

const paraDataType = document.querySelector('#para-data-type');

numberDataType.addEventListener('click', () => {
    console.log("Function is running..");

    paraDataType.textContent = `The variable contains a numeric data type: ${item}`;
});

stringDataType.addEventListener('click', () => {
    item =  "Oki Hendrawan";
    console.log("Function is running..");

    paraDataType.textContent = `The variable contains a string data type: ${item}`
});

booleanDataType.addEventListener('click', () => {
    item = true;
    console.log("Function is running..");

    paraDataType.textContent = `The variable contains a boolean data type: ${item}`;
});

// Declare a variable message inside an if block. Try to log it outside the block. What do you get?

const scopeAwarnessBtn = document.querySelector('#scope-awareness-btn');
const scopeAwarnessPara = document.querySelector('#para-scope-awarness');

scopeAwarnessBtn.addEventListener('click', () => {
    if (true) {
        let message = "Hello from inside the block!";
    }
    console.log(message);
});

// Combining everything
const combiningEverythingBtn = document.querySelector('#combining-everything-btn');
const combiningEverythingPara = document.querySelector('#combining-everything-para');

// Ask user name, age, and hobby (use prompt() if running in browser).
combiningEverythingBtn.addEventListener('click', () => {
    console.log("Function is running..");
    // Store them in variables.
    const userName = prompt("Enter your name:");
    const userAge = prompt("Enter your age:");
    const userHobby = prompt("Enter your hobby:");

    combiningEverythingPara.textContent = `Hi ${userName}, you are ${userAge} years old and love ${userHobby}`;
});
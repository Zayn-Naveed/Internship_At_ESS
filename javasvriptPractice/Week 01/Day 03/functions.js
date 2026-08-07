//// functions 

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }
// addTwoNumbers(22, 24);
// const result = addTwoNumbers(22, 24);
// console.log(`Result: ${result}`);

function addTwoNumbers(num1, num2) {  // (num1, num2) are function parameters 
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
addTwoNumbers(22, 24);    // (22, 24) are function arguments 

const result = addTwoNumbers(22, 24);
console.log(`Result: ${result}`);

function loginUserMessage(username) {
    if (username === undefined ) {      // !username and username === undefined both are equal
        console.log("Please enter some username");
        return
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage());
console.log(loginUserMessage("Zain Naveed"));

function calculateCartPrice(...n1) {
    return n1;
}
console.log(calculateCartPrice(1, 2, 3, 4 , 5 , 6 ,7, 8, 9 , 10));

const user = {
    username: "Zain Naveed",
    age: 21,
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and his age is ${anyObject.age} years.`);
}
handleObject(user);
handleObject({
    username: "Muhammad Anas",
    age: 19
})

// above same with array
const myNewArr = [1, 2, 3, 4, 5, 6];
function returnSecondValue(getArray) {
    return `The second value at index 1 is ${getArray[1]}`;
}
console.log(returnSecondValue(myNewArr));

const myNewFunction = function myFunaction(getArray){
    return `The third value at index 2 is ${getArray[2]}`
} ;                                             // function expression 
console.log(myNewFunction(myNewArr));

let myNewFunction2 = ()=>{
    return `Assalam o alaikum wa rahmatullah wa barakatuhh!`
}
console.log(myNewFunction2());           // arrow function 

let myNewFunction3 = (getArray)=>{
    return `The first value at index 0 is ${myNewArr[0]}`
}
console.log(myNewFunction3(myNewArr));       // arrow function with parameters 

let myNewFunction4 = (getArray) => `The fourth value at index 3 is ${myNewArr[3]}`;

console.log(myNewFunction4(myNewArr));         // another way without curly braces or implicit return function

let myNewFunction5 = getArray => `The fifth value at index 4 is ${myNewArr[4]}`;

console.log(myNewFunction5(myNewArr));         // withiout parenthesis around parameters

const myNewFunction6 = (getArray) => (`The third value at index 2 is ${myNewArr[2]}`)
console.log(myNewFunction6(myNewArr));

// "this" keyword gives undefined or empty objects or arrays on use

// Immediately Invoked Function expression IIFE

(function name(){ // named IIFE 
    console.log("Zain Naveed");
})();

( () => {
    console.log("My name is Zain Naveed and I'm 21 years old");
    
})();

( function myName(userName){
    console.log(`Welcome, ${userName}`);
    
})("Zain Naveed");

( (user2) =>{
    console.log(`Welcome, ${user2}`);
    
})("Muhammad Anas");


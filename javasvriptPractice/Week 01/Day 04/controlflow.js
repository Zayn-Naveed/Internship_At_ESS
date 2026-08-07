// if 


let temperature = 29;
if (temperature > 30) {
    console.log("Weather is hot");
} else{
    console.log("weather is normal");
    
}

const userLoggedIn = true;
const userHasDebitCard = true;

if (userLoggedIn && userHasDebitCard ){
    console.log("Welcomme, you can shop from our store.");
}

const loggedInFromGoogle = true;
const loggedInfromEmail = false;

if(loggedInFromGoogle || loggedInfromEmail){
    console.log("Welcome, you may proceed.");
    
}

const balance = 1000;

if (balance < 500) {
    console.log("insufficient balance,");
    
} else if (balance < 700) {
    console.log("insufficient balance");
    
} else if (balance < 900) {
    console.log("insufficient balance");
    
} else {
    console.log("you can withdraw");
    
} 

// *****SWITCH******

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        
        break;
    case 2:
        console.log("February");
        
        break;
    case 3:
        console.log("March");
        
        break;
    case 4:
        console.log("April");
        
        break;

    default:
        console.log("no match");
        
        break;
}
// if we don't add break it will continue the flow of program 

const monthMatching = "March";

switch (monthMatching) {
    case "January":
        console.log("January");
        
        break;
    case "February":
        console.log("February");
        
        break;
    case "March":
        console.log("March");
        
        break;
    case "April":
        console.log("April");
        
        break;

    default:
        console.log("no match");
        
        break;
}

// we not only take numbers in cases we also take strings as cases as well 

 // *****Truthy & Falsy Values*******

//  falsy values 

// false , 0 , -0 , Bigint 0n , "" , null , undefined , NaN

// Truthy Values

// "0" , "false" , " " , [] , {} , function(){} 

const arr = [];

if (arr.length === 0){
    console.log("Array is not empty");    
} else {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is not empty");
    
} else {
    console.log("Object is not empty.");
    
}

// Nullish Coalescing Operator (??) null & undefined 

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

// console.log(val1);

// TERNIARY OPERATOR 

const iceTeaPrice = 100;
iceTeaPrice <= 50 ? console.log("Tea price is less") : console.log("Tea price is high");


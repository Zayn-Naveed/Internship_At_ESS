"use strict"; //treat all JS code as newer version

// alert(3+3) // we are using nodejs not browser 

// code readability 
let age = 21;
let name = "Zain Naveed";
let isLoggedIn = false;
let maritalStatus;
let currentAffair = null;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof maritalStatus);
console.log(typeof currentAffair);

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123');

console.log(id === anotherId);




// ** PREMITIVE DATATYES **
// number =>  its range is 2^53
// bigInt  for very larger value like in trading 
// string => ""
// boolean => true or false
// null => standalone value
// undefined => value not assigned ( let age; )
// symbol => unique 

// **Object**
// object
// Array
// Function

// Arrays, Objects, Functions

 const heroes = ["hulk", "black widow", "ironman", "captian america"];

 let myobj = {
    name: "Zain Naveed",
    age: 22,
 }

 const myFunction = function(){
    console.log("Hello, g");
    
 }

//  javascript is a non static or dynamic type of language because we don't have to declare data type of variable

/*      ********HOISTING*********                           

Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope before code execution. This means you can use variables and functions before they are declared in your code.
it has following behaviors

Declaration Type        Hoisted?    Initialized Value       Throws Error if Used Early?
var                     Yes         undefined               No (returns undefined)
let                     Yes         Uninitialized           Yes (ReferenceError)
const                   Yes         Uninitialized           Yes (ReferenceError)
Function Declaration    Yes         Full function body      No (executes normally)
Function Expression     No         Follows variable rules   Yes (depends on var, let, or const)

*/ 

console.log(firstName); // undefined
var firstName = "Muhammad Zain";

console.log(lastName); // refrence error 
let lastName = "Naveed Ahmed";

console.log(age); // refrence error 
const age = 22;

greet(); //  Function Hoisting

function greet() {
  console.log("Hello Zain!");
}

greet(); // Function Expression Hoisting

const greet = () => {
  console.log("Hello Zain!");
}
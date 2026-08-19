/*
Today i am starting practicing javascript

first we see how we can add javascript 
there are 3 ways
1. inline
    "<button onclick="alert('Hello from inline JS!')">Click Me</button>"
    this is not a good practice.

2. internal
        <!DOCTYPE html>
        <html>
        <head>
            <title>Internal JS Example</title>
        </head>
        <body>

            <h1>Welcome to My Site</h1>

            <script>
                // Internal JavaScript goes here
                console.log("Hello from internal JS!");
            </script>
        </body>
        </html>

        this is only good for a short code like one or two logics but for a bigger code its not suitable 
3. external 
        it is a separate .js file
        we name our .js file and connect it to our html main file just before closing tag of body js file connects with this syntax 
        "<script src="filename.js"></script>"
        this is a very good practice.
        Modern Solution: Keep the link in the <head> but add the defer attribute (e.g., <script src="app.js" defer></script>). This tells the browser to download the script in the background and run it only after the HTML is fully parsed.

"//" this is used for a single line comment

and we are now writing multi line comments

*/

// console.log("Hello, JavaScript");

// console.log("This is my first javascript code");

// *****************var,let,const***********************

let name = "M. Zain";  // the value which we have to change according to our needs 
const bornYear = 2004; // the value that can not be changed




if(true){
    var firstName = "Zain";
    firstName = "Muhammad Zain"; // var can be reassign inside the block  
    let lastName = " Naveed"; 
    lastName = " Naveed Ahmed"; // let can be reassign value inside the block  
    const bornYear = 2004; // 
    bornYear = 2005; // const cannot be reassign inside the block 

    console.log(firstName);
    console.log(lastName);
    console.log(lastName);
    

}

console.log(firstName); // var can be accesed outside the block and function scoped
console.log(lastName);  // let acnnot be accesible outside the block and is block scoped(code inside curly braces)
console.log(bornYear);  // const acnnot be accesible outside the block and is block scoped (code inside curly braces)

console.log(age); // var is hoisted it gives undefined 

var age = 22;

console.log(city);
let city = "Lahore";

console.log(country);
const country = "Pakistan";

// while let and const also hoisted but it throws refrence error because of TDZ (Temporal Dead Zone)

// temporal Dead Zone
//  the Temporal Dead Zone (TDZ) is the specific behavior where a variable is completely inaccessible and throws a ReferenceError, if you try to use it before its official declaration line is executed.This behavior exclusively impacts variables declared with let and const, as well as class declarations.



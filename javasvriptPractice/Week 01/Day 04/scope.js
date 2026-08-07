// here we are discussing about gloabal and local scope

// {} the variable declared in these curly braces are known as blocak scope 

// the issue of scopes arose when one use the variable and the other one also used that varialble fo its work but it changes the output of first one i-e

let a = 10;
const b= 20;
var c = 30;

if(true){
    let a = 40;
    const b = 50;
    var c = 60;

    // console.log(a);
    // console.log(b);
    // console.log(c);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// global scope can be used in block scope but block scope should not be used outside the block scope 

// ***SCOPE in NESTING****

function one(){
    const username = "Zain Naveed";

    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    // console.log(website); error because of scope 
    two();
    
}
one();

if(true){
    const userName = "Zain Naveed";
    if(userName === "Zain Naveed"){
        const websitename = " youtube";
        console.log(userName + websitename);
        
    }
    // console.log(websitename); scope issue 
    
}
// console.log(userName);  scope issue 

function addOne(num){
    return num + 1;
}

addOne(10);

// Function expression 
const addTwo = function(num){
    return num + 2;
}
addTwo(10);
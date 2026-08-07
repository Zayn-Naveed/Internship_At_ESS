// singleton 
// if we make from constructor it will be singleton otherwise if we make from literal it will not be singleton

// object literals 

const mySym = Symbol("key1");

const jsUser = {
    name: "Zain Naveed",
    "fatherName": "Naveed Ahmed",
    email: "zayn22@gmail.com",
    [mySym]: "mykey1",  // symbol declaration syntax in object
    city: "Lahore",
    country: "Pakistan",
    isEmployeed: "false"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser[mySym]);

jsUser.email = "zayn24@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "zayn29@gmail.com";
console.log(jsUser);

jsUser.greetings = function(){
   console.log(`Hello, Welcome ${this.name}`);
}
console.log(jsUser.greetings());

const tinderUser = new Object();  // this forms an instance another method to declare object

const tinderUser2 = {};
tinderUser2.id = "123abc";
tinderUser2.name = "Zain Naveed";
tinderUser2.isLoggedIn = false;

console.log(tinderUser2);

const regularUser = {
    email: "someuser@gmail.com",
    fullname: {
        usersfullname:{
            firstname: "Zain",
            lastName: "Naveed"
        }
    }
}
console.log(regularUser.fullname.usersfullname);

const obj1 = {1: "A", 2:"B"}
const obj2 = {3: "C", 4:"D"}
const obj3 = Object.assign({}, obj1, obj2);
const obj4 = {...obj1, ...obj2};  // rest operator (collects multiple items into a single array or object)
console.log(obj3);
console.log(obj4);

const users = [
    {
        id: 1,
        email: "abc123@gmail.com"
    },
    {
        id: 2,
        email: "abc456@gmail.com"
    },
    {
        id: 3,
        email: "abc789@gmail.com"
    },
    {
        id: 4,
        email: "abc012@gmail.com"
    }
]
// console.log(users[1].email); 

console.log(tinderUser2);
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(Object.entries(tinderUser2));
console.log(tinderUser2.hasOwnProperty("isLoggedIn"));

const course = {
    name: "JS in hindi",
    price: "1000",
    instructor: "Hitesh Choudhry"
}

const {instructor: inst} = course; // object destructuring 
console.log(inst);

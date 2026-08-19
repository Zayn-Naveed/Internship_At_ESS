// ****LOOPS / ITERATIONS*****

// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
  //  console.log(i);
    
}

// nested for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
   // console.log(`Table of ${i}`);
    for (let j = 0; j <= 10; j++) {
        const element = j;
        //console.log(`${i} * ${j} = ${i*j}`);
    }
};

let myArray = ["Ironman", "Caption America", "Hawkeye", "Hulk", "Spiderman", "Wanda", "Black Widow", "Ant man", "Vision", "Roddy", "Thor", "Valcurry", ];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
};

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
  //  console.log(`The value of i is ${i}`);
};
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
   // console.log(`The value of i is ${i}`);
};

// WHILE & DO WHILE LOOP 

let index = 0;
while (index <= 10) {
   // console.log(`the value of index is ${index}`);
    index = index +2;
}

let arr = 0;
while (arr < myArray.length) {
   // console.log(myArray[arr]);
    arr = arr + 1;
}

let score = 1;
do {
   // console.log(`score is ${score}`);
    score++;
} while (score <= 10);

let score2 = 11;
do {
   // console.log(`score is ${score2}`);
    score2++;
} while (score2 <= 10);

// for of loop  (array specific loops)

for (const arr of myArray) {
   // console.log(arr);
    
}

const greetings = "Welcome here";
for (const greet of greetings) {
    //console.log(greet);
    
}

// MAPS

const map = new Map();
map.set('PK' , "Pakistan");
map.set('IN' , "India");
map.set('FR' , "France");
map.set('USA' , "United States of America");
map.set('PK' , "Pakistan");  // as we enter two times pakistan but it prints only once its uniqueness of maps 

//console.log(map);

for (const [key , value] of map) {
  //  console.log(key, ":-" , value);
    
}
// for of loop does not work on objects

// ******FOR IN*******

const myObject = {
    HTML: "Hyper Text Markup Language",
    CSS: "Cascading Style Sheet",
    JS: "JavaScript"
}
for (const key in myObject) {
   // console.log(key);
//    console.log(myObject[key]);
  // console.log(`${key} stands for ${myObject[key]}`);
   
}

const programmingLang = ["HTML", "CSS", "JS"];
for (const key in programmingLang) {
  //  console.log(key); 
  // console.log(programmingLang[key]);
   
}
// in for of direct get the values of array while in for in it gets index number 

for (const key in map) {
   // console.log(key);   also we can't iterate through for in loop in map
    
}

myArray.forEach(function (val) {
   // console.log(val);
    
})

myArray.forEach((val)=>{
    //console.log(val);
    
})

function newVal() {
   //  console.log("Welcome here");
    
}
myArray.forEach(newVal); // here just we have to write name not call it as for Each is also a function so we dont have to put parenthesis 

myArray.forEach( (item, index, arr)=>{
   // console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: "HTML",
        extensionname: "html"
    },
    {
        languageName: "CSS",
        extensionname: "css"
    },
    {
        languageName: "JS",
        extensionname: "js"
    }
]

myCoding.forEach( (index)=> {
    // console.log(index.languageName);
    
})

const marvelHeroes = myArray.forEach( (item)=>{
   // console.log(item); 
   //  return item;
} )

 //console.log(marvelHeroes);    // we can not initilize becoz it returned a undefined value also and we check it through return keyword and it behaves as above 

 // ****FILTER*****

 const newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 const requiredNum = newArr.filter( (num) => {
    // num > 4;
    return num > 4;     // if we open the scope, for returning a value we have to use return keyword
 } )
// console.log(requiredNum);

 const requiredNum2 = newArr.filter( (num) => num > 4 );
 // console.log(requiredNum2);
 
 const newNums = [];
 const requiredNum3 = newArr.forEach( (num) =>{
    if (num >4) {
        newNums.push(num);
        
    }
 } )

 // console.log(newNums);    // above work w can do with for Each as well but it difficult than filter 4so we can use both everyone will work 

 const books = [
    {
        title: "B1",
        publish: 1970,
        genre: "fiction"
    },
    {
        title: "B2",
        publish: 1980,
        genre: "Non-fiction"
    },
    {
        title: "B3",
        publish: 1990,
        genre: "History"
    },
    {
        title: "B4",
        publish: 2000,
        genre: "Science"
    },
    {
        title: "B5",
        publish: 2005,
        genre: "fiction"
    }
 ]

 const userReqBooks = books.filter( (bk) => {
    return bk.genre >= "fiction";
 } )
 
 // console.log(userReqBooks);

 const mappedArr = newArr.map( (num) => num*10 );

 // console.log(mappedArr);
 
const mappedArr2 = newArr.map( (num) => num + 1 ).map( (num) => num * 10).filter( (num) => num >= 50);
// console.log(mappedArr2);

const arra = [1, 2, 3];

const reducedArra = arra.reduce( function(acc, curVal) {
  //  console.log(`The value of Accumulator is ${acc} and Current Value is ${curVal}`);
    
    return acc + curVal;
}, 0 )

// console.log(reducedArra);

const reducedArra2 = arra.reduce( (acc, curVal) => acc + curVal ,0 );
// console.log(reducedArra2);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 5000
    },
    {
        itemName: "Mobile Dev Course",
        price: 10000
    },
    {
        itemName: "Data Science Course",
        price: 15000
    },
]

const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price  ,0)

console.log(totalBill);

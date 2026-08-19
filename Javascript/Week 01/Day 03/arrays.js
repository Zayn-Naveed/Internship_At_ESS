// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(0, 1, 2, 3, 4, 5);

// Array Methods

myArr.push(6);  // adds 




myArr.pop();

myArr.unshift(9);
myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.join());
// console.log(myArr.slice(1, 3));  
// console.log(myArr.splice(1, 3));

const marvelHeroes = ["Thor", "Ironman", "Captian America" ];
const dcHeroes = ["Batman", "Flash", "Superman"];
const GOTHeroes = ["Jon Snow", "Arya Stark", "Sansa Startk", "Daenerys Targaryan"];

const allHeroes = marvelHeroes.concat(dcHeroes);
const all_heroes = [...marvelHeroes, ...dcHeroes, ...GOTHeroes] // spread operator (expands an array or object into individual elements)
console.log(allHeroes);
console.log(all_heroes);

const newArr = [0, 1, 2, 3, [4, 5, 6], [7, [8, 9]],10];
// console.log(newArr);
// console.log(newArr.flat(2));
// console.log(newArr.flat(Infinity));

// console.log(Array.isArray("Zain naveed"));
// console.log(Array.from("Zain naveed"));
// console.log(Array.isArray({name: "Zain naveed"})); //interesting as it is object it is not directly converted we have to tell either key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

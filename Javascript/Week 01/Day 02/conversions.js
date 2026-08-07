let score = 33;

console.log(typeof score);
console.log(typeof(score));

let score1 = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;
let score6 = "zayn naveed";

let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);
let valueInNumber6 = Number(score6);

console.table([score, score1, score2, score3, score4, score5, score6]);

console.table([valueInNumber, valueInNumber1, valueInNumber2, valueInNumber3, valueInNumber4, valueInNumber5, valueInNumber6]);

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);
console.log(typeof valueInNumber5);
console.log(typeof valueInNumber6);

// "33" => 33
//  "33abc" => NaN
// true => 1; false => 0;

let value = 1;
let value2 = 0;
let value3 = "";
let value4 = "zayn";
let value5 = true;
let value6 = false;

console.table([value, value2, value3, value4, value5, value6]);

let valueInBoolean = Boolean(value);
let valueInBoolean1 = Boolean(value2);
let valueInBoolean2 = Boolean(value3);
let valueInBoolean3 = Boolean(value4);

console.table([valueInBoolean, valueInBoolean1, valueInBoolean2, valueInBoolean3]);

// 1 => true; 0 => false;
// "" => false
// "zayn" => true

console.log(typeof valueInBoolean);
console.log(typeof valueInBoolean1);
console.log(typeof valueInBoolean2);
console.log(typeof valueInBoolean3);
let someNumber = 33;
let stringNumber = String(someNumber);0
console.log(stringNumber);
console.log(typeof stringNumber);
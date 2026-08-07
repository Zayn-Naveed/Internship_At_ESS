// STRINGS 
// strings are  for storing text 
// strings are written with quotes 

// quotes may be single or double 
// let str1 = "Zain Naveed";
// let str2 = 'Zain Naveed';
// both are right 

// problem occurs when we have to use a single or double quote within a string like 
// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'"
// let answer3 = 'He is called "Johnny"'
// in conclusion we can say that if we use double quotes inside we write within single quote and vice versa as discussed earlier 

// this problem of single double quote finish when javascript introduces this as:
// let text = `He's often called "Johnny"`;
// with using backticks this problem of using single and double quotes is resolved 

// let text = `We are the so-called "Vikings" from the north.`;
// let text = "We are the so-called \"Vikings\" from the north.";

//      Code    	Result  	Description
//      \'	        '	        Single quote
//      \"	        "	        Double quote
//      \\	        \	        Backslash

// to find the length of string we use length property 
// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.length;

// **********Basic String Methods***************
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// Extracting string charcters
// The charAt() method returns the character at a specified index (position) in a string:
// The charCodeAt() method returns the code of the character at a specified index in a string:The method returns a UTF-16 code (an integer between 0 and 65535).
// ES2022 introduced the string method at():
// Using property access [] like in arrays

// Extracting String Parts
// slice() extracts a part of a string and returns the extracted part in a new string.The method takes 2 parameters: start position, and end position (end not included).
// substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
// substr method is deprecated

//  Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
//A string is converted to lower case with toLowerCase():

// concat() joins two or more strings:

// The trim() method removes whitespace from both sides of a string: also trimStart() & trimEnd() removes from start and romves from end respectively 

// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

// The replace() method replaces a specified value with another value in a string:
// In 2021, JavaScript introduced the string method replaceAll():

// A string can be converted to an array with the split() method:

// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// Basic String Methods
// String Templates
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()
     
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
// The includes() method returns true if a string contains a specified value.Otherwise it returns false.
// The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false:
// 
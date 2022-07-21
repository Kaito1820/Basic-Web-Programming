/*
1. length: The string length method returns the number of characters in a string included empty space.
2. toUpperCase(): this method changes the string to uppercase letters.
3. toLowerCase(): this method changes the string to lowercase letters.
4. substr()): It takes two arguments, the starting index and number of characters to slice. 
//console.log(string.substr(4,6)) JavaScript-> Script 
5. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index. 
//console.log(string.substring(4,10))    // Script
*/

// 6. split(): The split method splits a string at a specified place.
let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//----------------------------------------------------------------------
// 7. trim(): Removes trailing space in the beginning or the end of a string.
let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))

let firstName1 = ' Asabeneh '

console.log(firstName1)
console.log(firstName1.trim())  // still removes spaces at the beginning and the end of the string

//----------------------------------------------------------------------
// 8.includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. 
// If a substring exist in a string, it returns true, otherwise it returns false.
let string2 = '30 Days Of JavaScript'

console.log(string2.includes('Days'))     // true
console.log(string2.includes('days'))     // false - it is case sensitive!
console.log(string2.includes('Script'))   // true
console.log(string2.includes('script'))   // false
console.log(string2.includes('java'))     // false
console.log(string2.includes('Java'))     // true

let country2 = 'Finland'

console.log(country2.includes('fin'))     // false
console.log(country2.includes('Fin'))     // true
console.log(country2.includes('land'))    // true
console.log(country2.includes('Land'))    // false
//----------------------------------------------------------------------
// 9. replace('string1','string2'): takes as a parameter the old substring and a new substring.
// 10. charAt(index): Takes index and it returns the value at that index
// 11. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
// 12. indexOf(): Takes a substring and if the substring exists in a string it returns 
// the first position of the substring if does not exist it returns -1
// 13. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring 
// if it does not exist it returns -1
// 14. concat(substring, substring, substring): it takes many substrings and joins them.

//----------------------------------------------------------------------
/* 15. startsWith(substring): it takes a substring as an argument and it checks if the string starts with that specified substring. 
 It returns a boolean(true or false).*/
 let string3 = 'Love is the best to in this world'

 console.log(string3.startsWith('Love'))   // true
 console.log(string3.startsWith('love'))   // false
 console.log(string3.startsWith('world'))  // false
 
 let country3 = 'Finland'
 
 console.log(country3.startsWith('Fin'))   // true
 console.log(country3.startsWith('fin'))   // false
 console.log(country3.startsWith('land'))  //  false

 //----------------------------------------------------------------------
 /* 16. endsWith(substring): it takes a substring as an argument and it checks if the string ends with that specified substring. 
 It returns a boolean(true or false).*/

//----------------------------------------------------------------------
 /* 17. search(substring): it takes a substring as an argument and it returns the index of the first match.
  The search value can be a string or a regular expression pattern. */
 let string4 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string4.search('love'))          // 2
console.log(string4.search(/javascript/gi))  // 7

//----------------------------------------------------------------------
/* match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. 
 It starts with / sign and ends with / sign. */
let string5 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive

let string6 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string6.match('love'))

let pattern = /love/gi
console.log(string6.match(pattern))   // ["love", "love", "love"]

// Extract numbers from text using a regular expression
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

//----------------------------------------------------------------------
// repeat(n): it takes a number as argument and it returns the repeated version of the string.
let string7 = 'love'
console.log(string7.repeat(10)) // lovelovelovelovelovelovelovelovelovelove


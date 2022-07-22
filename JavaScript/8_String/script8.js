// let s = 'The way to use \' \', use \\'
// console.log(s)

//Javascript string methods
let myString = 'I am am Kaito Kaito Kaito, Hi, Hello'

// 1. Length
console.log(myString.length)

console.log('------------------------------------------------------')
// 2. Find Index
console.log(myString.indexOf('Kaito'))
console.log(myString.lastIndexOf('am'))
console.log(myString.indexOf('Kaito',13)) // find first substring after the index n
console.log(myString.search('am'))

console.log('------------------------------------------------------')
// 3. Cut String
console.log(myString.slice(0))
console.log(myString.slice(31))
console.log(myString.slice(27,29))
console.log(myString.slice(-5,-1))

console.log('------------------------------------------------------')
// 4. Replace
let myString1 = 'I am am Kaito Kaito Kaito, Hi, Hello'
console.log(myString1.replace('Kaito', 'Kaito1820'))
let myString2 = 'I am am Kaito Kaito Kaito, Hi, Hello'
console.log(myString2.replace(/Kaito/g, 'Kaito1820')) // /substring/g bieu thuc chinh quy

console.log('------------------------------------------------------')
// 5. Trim
let myString3 = '    I    am    Kaito    '
console.log(myString3.trim())
console.log(myString3.trim().length)
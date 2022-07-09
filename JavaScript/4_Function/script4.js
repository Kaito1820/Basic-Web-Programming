/*
function output(a, b){
    console.log(a,b);
}
var age = 18;
var n = "Kaito";
output(n, age);

function sum(a,b){
    return a+b;
}
console.log(sum(1000,sum(800,20)));
*/

/*
let square = a => a*a

console.log(square(3, 4))
*/

/*
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
  */

/*
  const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use an a parameter followed by spread operator
    console.log(args)
   }
   
   sumAllNums(1, 2, 3, 4)
   // [1, 2, 3, 4]
*/

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))

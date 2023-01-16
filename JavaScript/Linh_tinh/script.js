/*
let length = 2, height = 3, width = 2;
let ham = () =>{
    return 2*100;
}
console.log(ham());
*/

/*
// a callback function, the function could be any name
let callback = (n) => {
    return n ** 2;
}

  // function take other function as a callback
function cube(callback, n) { 
    return callback(n) * n;
}
console.log(cube(callback, 3))
*/

/*
// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
  
    return doSomething
}

console.log(higherOrder(2)(3)(10))
*/


/*
function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 2000) // it prints hello in every 2 seconds
*/

let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(n => n*n) 
                //ordinal syntax
console.log()
//console.log(index, elements, arr))
// (elements,index, arr)
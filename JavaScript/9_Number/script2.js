let result = 20 / 'ABC'

if(result == NaN){
    console.log('Bruh')
}
console.log(isNaN(result))


function isNumber(value){
    return Number.isFinite(value)
}

/**
 * function isNumber(value){
 *      if(typeof value == 'number' && !isNaN(value)){
 *          return true
 *      }
 *      return false
 * }
 */


// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false
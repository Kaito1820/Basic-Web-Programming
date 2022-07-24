/**
 * 1. for
 * 2. for/in - lặp qua key của đối tượng
 * 3. for/of - lặp qua value của đối tượng
 * 4. while
 * 5. do/while
 */

 /*
 function getRandNumbers(min, max, length){
    let array = [];
    for(let i = 0; i < length; i++){
        array[i] = Math.floor(Math.random() * (max-min) + min);
    }
    return array;
}

console.log(getRandNumbers(50, 100, 51))
*/


// ***For/In***

let me = {
    name : 'Khánh',
    age : 18,
    address: 'Earth'
}

let arr = [
    'JS',
    'HTML',
    'CSS'
]

for(let key in me){
    console.log(`${key} -> ${me[key]}`) // giống với human['name'], name là key
}
console.log('-----------------------------------')
for(let value of arr){
    console.log(value);
}

// for(let value of me){
//     console.log(value); // error -> phai chuyen thanh mang
// }
console.log('----------------------------------')
console.log(Object.keys(me));

for(let value of Object.keys(me)){
    console.log(me[value])
}

console.log('---------------------------------')
console.log(Object.values(me));

for(let value of Object.values(me)){
    console.log(value);
}
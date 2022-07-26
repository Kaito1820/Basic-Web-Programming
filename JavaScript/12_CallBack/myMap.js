Array.prototype.myMap = function(cb) {
    let ans =[], n = this.length;
    for(let i = 0; i < n; i++){
        let item = cb(this[i], i);
        ans.push(item);
    }
    return ans    
}

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

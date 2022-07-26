Array.prototype.myEvery = function(course){
    for(let index in this){
        if(this.hasOwnProperty(index) && !course(this[index], index, this)){
            return false;
        }

    }
    return true;
}
let courses = [
    {
        name: 'HTML',
        coin: 500,
        isFinish: true
    },
    {
        name: 'CSS',
        coin: 580,
        isFinish: true
    },
    {
        name: 'JS',
        coin: 600,
        isFinish: true
    }
]

var result = courses.myEvery(function(element, index, array){
    return element.isFinish;
    // return element.coin > 550
})

console.log(result)

const numbers = [1, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); 
// Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); 
// Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); 
// Output: true


Array.prototype.mySome = function(course){
    for(let index in this){
        if(this.hasOwnProperty(index) && course(this[index], index, this)){
            return true;
        }
    }
    return false;
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
        isFinish: false
    },
    {
        name: 'JS',
        coin: 600,
        isFinish: false
    }
]

var result = courses.mySome(function(element, index, array){
    return element.isFinish;
})


const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); 
// Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); 
//Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); 
//Output: true
Array.prototype.myFilter = function(course){
    let ans = [];
    for(let index in this){
        if(this.hasOwnProperty(index) && course(this[index], index, this)){
            ans.push(this[index]);
        }
    }
    return ans;
}
let courses = [
    {
        name: 'HTML',
        coin : 500
    },
    {
        name: 'CSS',
        coin : 580
    },
    {
        name: 'JS',
        coin : 600
    }
]


let filterCourse = courses.myFilter(function(element, index, arr){
    return element.coin > 550;
})

console.log(filterCourse)

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); 
//Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); 
//Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); 
//Output: [1, 2, 3, 4]

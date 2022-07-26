/**
 * 1. forEach()
 * 2. every() : kiem tra TAT CA phan tu cua mang co thoa dk hay ko => giong &&
 * 3. some() : kiem tra it nhat 1 phan tu cua mang co thoa dk hay khong => giong ||
 * 4. find() : tra ve 1 phan tu thoa man neu tim thay trong mang
 * 5. filter(): giong find() nhung tra ve nhiu phan tu thoa man neu tim thay trong mang
 * 6. map()
 * 7. reduce()
 */

let courses = [
    {
        id : 1,
        name : 'HTML',
        coin : 100
    },
    {
        id : 2,
        name : 'CSS',
        coin : 200
    },
    {
        id : 1,
        name : 'JS',
        coin : 300
    },
    {
        id : 5,
        name : 'JS',
        coin : 400
    },
    {
        id : 1,
        name : 'ReactJs',
        coin : 0
    },
    {
        id : 1,
        name : 'PHP',
        coin : 0
    }
]
// courses.forEach();// error

courses.forEach(function(course, index){ // tham so thu nhat la phan tu cua arr, tham so thu hai la index
    console.log(index, course);
});

console.log('-----------------every & some-------------------')
let isFree = courses.every(function(course, index){ // test some = thay every
    return course.coin === 0;
});

console.log(isFree)

console.log('-----------------find & filter-------------------')
let checkCourse = courses.filter(function(course, index){
    return course.name === 'JS';
});

console.log(checkCourse)

console.log('-----------------Bài Tập-----------------')
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arr){
    let favorSport = arr.filter(function(sport){
        return sport.like > 5;
    });

    return favorSport;
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
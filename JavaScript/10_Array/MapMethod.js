// Yeu cau bai toan them chu 'Khoa hoc' truoc ten khoa hoc, them thuoc tinh cho moi course
let courses = [
    {
        id: 1,
        name: 'HTML',
        coin: 1
    },
    {
        id: 2,
        name: 'CSS',
        coin: 5
    },
    {
        id: 3,
        name: 'JS',
        coin: 3
    },
    {
        id: 4,
        name: 'PHP',
        coin: 2
    },
    {
        id: 5,
        name: 'Python',
        coin: 4
    },
]
function courseHandler(course,index, originArray){
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc ${course.name}`,
        coin: course.coin,
        coinText: `Gia ${course.coin}`,
        index: index,
        originArray: originArray
    }
}
let newCourse = courses.map(courseHandler)// map nhu 1 vong lap, lap qua tung phan tu roi goi ham ben trong de thuc thi

console.log(newCourse)

/*
The main difference between map and forEach is that the map method returns a new array 
by applying the callback function on each element of an array, 
while the forEach method doesn't return anything. 
You can use the forEach method to mutate the source array, 
but this isn't really the way it's meant to be used.
*/
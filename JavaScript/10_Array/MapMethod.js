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
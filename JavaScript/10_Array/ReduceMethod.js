// Dung reduce method khi muon nhan 1 gia tri duy nhat sau khi tinh toan va xu li cac phan tu tren array
//Bai toan Vd: Tinh tong so coin cua cac khoa hoc sau
let courses = [
    {
        id: 1,
        name: 'HTML',
        coin: 100
    },
    {
        id: 2,
        name: 'CSS',
        coin: 800
    },
    {
        id: 3,
        name: 'JS',
        coin: 2000
    },
    {
        id: 4,
        name: 'PHP',
        coin: 3000
    },
    {
        id: 5,
        name: 'Python',
        coin: 4000
    },
]
// Cach Thuong
/*
let totalCoin = 0;

for(let course of courses){
    totalCoin += course.coin;
}

console.log(totalCoin)
*/
//Dung reduce
let i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    i++;
    var total = accumulator + currentValue.coin;

    console.table({
        'Lượt chạy : ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total
    });
    return total;
}

var totalCoin = courses.reduce(coinHandler, 0); // 0 la gia tri ban dau giong voi totalCoin = 0
console.log(totalCoin)

//  Viet ngan gon
let totalCoin2 = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
}, 0);

console.log(totalCoin2);


console.log('--------------Bài tập--------------')

//Flat - làm phẳng mảng
var depthArray = [1, 2, [3,4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return  flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//Lấy các khóa học đưa vào 1 mảng mới
let topics = [
    {
        topic: 'Font-end',
        course: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        course:[
            {
                id: 1,
                title: 'PHP',
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]

let allCourse = topics.reduce(function(courses, topic){
    return courses.concat(topic.course);
}, [])

console.log(allCourse)

let htmls = allCourse.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <h2>ID: ${course.id}</h2>
        </div>
    `;
});

console.log(htmls.join(''));
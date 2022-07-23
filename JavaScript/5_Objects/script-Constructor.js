// Object Constructor
function User(firstName, lastName, avartar){  // day la mo ta cua doi tuong
    this.firstName = firstName
    this.lastName = lastName
    this.avartar = avartar

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className  = 'HTCL'
User.prototype.getClassName = function(){
    return this.className
}

let author = new User('Kaito', 'Kain', 'Avartar') // khi dung tu new + mo ta doi tuong => author se tro thanh 1 doi tuong
let student = new User('Khanh', 'Kai', 'Avartar')

author.title = 'Hello'
student.grade = 10

console.log(author)
console.log(student)
console.log(author.constructor)
console.log(author.constructor === User)
console.log(author.getName())

// ------DATE------
var date = new Date()

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`)

// ------MATH------
/**
 * Math.PI
 * Math.round()
 * Math.abs()
 * Math.ceil()
 * Math.floor()
 * Math.random() : tra ve so thap phan nho hon 1
 * Math.min()
 * Math.max()
 */

var random = Math.floor(Math.random() * 100) // 0 -> 99

if(random < 10){
    console.log('Cường hóa thành công')
}

var array = [
    'HTML',
    'CSS',
    'JS'
]

function getRandomItem(array){
    return array[Math.floor(Math.random() * array.length)]
}

console.log(getRandomItem(array))
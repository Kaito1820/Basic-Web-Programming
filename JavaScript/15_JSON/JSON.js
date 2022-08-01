// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, Boolean, Null, Array, Object,String
//Mã hóa / Giải mã
// Encode / Decode
// Stringify: Từ js types -> json 
// Parse: từ json -> js types


var b = '1'; // 1 chuỗi json: number
var json = '["Javascript", "PHP"]'; // cac phan tu va key trong mang cach nhau = dau ""
var jsonn = '{"name" : "Khanh", "age": 18}' 
var a = '"abc"' // sai : a = 'abc'

console.log(JSON.parse(a))
console.log(JSON.stringify([
    'Java',
    'PHP'
]))
console.log(JSON.stringify({
    name: 'Khanh',
    age: 19
}))


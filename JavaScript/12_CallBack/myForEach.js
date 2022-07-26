Array.prototype.myForEach  = function(callback){
    for(let index in this){ // tránh dùng for thường vì có thể thay đổi length được(tạo ra empty element)
        if(this.hasOwnProperty(index)){ // kiểm tra xem thành phần này có thuộc property không, nếu không nó sẽ xuất cả element trong prototype đã thêm(là myForEach)
            callback(this[index], index, this);
        }
    }
}
//var courses = new Array(100);
//courses.push('JS', 'Ruby');

let courses = [
    'HTML',
    'CSS',
    'JS'
]

courses.myForEach(function(course, index, arr){
    console.log(index, course, arr)
})
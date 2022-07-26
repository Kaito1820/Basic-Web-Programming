function arrToObj(arr){
    let arrHandler = arr.reduce(function(obj, val){
        obj[val[0]] = val[1];
        return obj;
    },{});
    return arrHandler
}
 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr));
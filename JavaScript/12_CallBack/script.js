//CallBack là hàm được truyền qua đối số khi gọi một hàm khác
// -> là hàm
// -> được truyền qua đối số

function myFunction(param){
    param(123)
}

function callBack(value){
    console.log(`Value: ${value}`)
}

myFunction(callBack)
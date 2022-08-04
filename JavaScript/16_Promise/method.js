//Promise.resolve(): luon tra ve trang thai dung
//Promise.reject()

let promise = Promise.resolve('Successfully!')

promise
.then(function(result){
    console.log('result:', result);
})
.catch(function(err){
    console.log('error:',  err);
})

/*
Promise.all(): dung de chay song song cac thao tac bat dong bo
VD: có 2 thao tác thực hiện sau 2s và sau 3s tuần tự sẽ tốn 5s.
Nhưng Promise.all cho phép 2 thao tác đó chạy song song -> tốn 3s
*/
let promise1 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([1]);
        }, 2000);
    }
)
let promise2 = new Promise(
    function(resolve){
        setTimeout(function(){
            resolve([2, 3]);
        }, 3000);
    }
)
// nếu 1 trong 2 promise ở trên bị reject thì sẽ lỗi hết
Promise.all([promise1, promise2])
    .then(function(result){
        let result1 =result[0];
        let result2 =result[1];
        console.log(result1.concat(result2));
    })
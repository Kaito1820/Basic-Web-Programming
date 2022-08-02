var promise = new Promise(
    function(resolve, reject){
        resolve();
    }
);


/*
promise
    .then(function(){
        return 1;           // return 1 xong sẽ lọt vào then bên dưới
    })                      // nếu không return thì then2 sẽ xuất undefied
    .then(function(data){
        console.log(data)
        return 2;
    })
    .then(function(data){
        console.log(data)
        return 3;
    })
    .then(function(data){
        console.log(data)
        return 4;
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('Done!')
    }) */

// Tính chất chain này y chang callback hell những giúp dễ đọc, dễ hiểu


promise
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3])
            },3000);
        });
    })                      
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log('Done!')
    })

// Nếu return 1 Promise thì then 2 phải chờ then trước thực thi rồi mới
// thực thi sau (xem VD trên), ngược lại thì then sau sẽ chạy trc


//Bài toán xuất 1, 2, 3, 4 sau mỗi giây
function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    })
    
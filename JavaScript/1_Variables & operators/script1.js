

/*
    Một số hàm built-in
        1. Alert
        2. Console
        3. Confirm
        4. Prompt
        5. Set timeout
        6. Set interval
 */

//var fullName = 'Nguyen Duy Khanh'
// console.log(fullName)
// confirm('Xac nhan ban du tuoi')
// prompt('Nhap so tuoi cua ban')

/*
setTimeout(function() {
    alert('Thong bao')
}, 2000) 
*/ //Sau x giây thì hiện 1 thông báo

/*
setInterval(function() {
    console.log('Day la thong bao' + Math.random())
}, 2000) 
*/ // Hiện thông báo sau x giây một cách liên tục

var a = 5;
var b = 2;
a++;
var c = a ** b; //lũy thừa 
console.log(c);
var d= a++ + --a; // 6+6
console.log(d);
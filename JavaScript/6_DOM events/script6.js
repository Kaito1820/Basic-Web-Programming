/*
let h1Elements = document.querySelectorAll('h1')

for(let i = 0; i < h1Elements.length; i++){
    h1Elements[i].onclick = function(e){
        console.log(e.target.value);
    }
}
*/

let inputValue;
let inputElement1 = document.querySelector('input[type="text"]')

inputElement1.onchange = function(e){
    console.log(e.target.value);
}
inputElement1.oninput = function(e){
    console.log(e.target.value);
}
// .onchange: gia tri phai thay doi moi xuat
// .oninput: thay đổi tới đâu xuất tới đó


let inputElement2 = document.querySelector('select');

inputElement2.oninput = function(e){
    inputValue = e.target.value; //e. target.checked: kiem tra tick hay ko tick
}

let inputElement3 = document.querySelector('input[type = "checkbox"]')

inputElement3.onchange = function(e){
    console.log(e.target.checked);
}
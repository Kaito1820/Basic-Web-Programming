/*
let h1Elements = document.querySelectorAll('h1')

for(let i = 0; i < h1Elements.length; i++){
    h1Elements[i].onclick = function(e){
        console.log(e.target.value);
    }
}
*/

let inputElement = document.querySelector('select');

inputElement.oninput = function(e){
    console.log(e.target.value); //e. target.checked: kiem tra tick hay ko tick
}

// .onchange: gia tri phai thay doi moi xuat
// .oninput: viet toi dau thay doi toi do
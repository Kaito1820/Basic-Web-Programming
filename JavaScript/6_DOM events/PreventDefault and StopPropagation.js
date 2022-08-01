// 1. preventDefault: loại bỏ hành vi mặc định trên thẻ html
// 2. stopPropagation: loại bỏ sự kiện nổi bọt

// let aElement = document.anchors; // phải đặt attribute name
let aElement = document.links;
for(let i = 0; i < aElement.length; i++){
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}

//stopPropagation
document.querySelector('div').onclick = 
    function(){
        console.log('DIV')
    }

document.querySelector('button').onclick = 
    function(e){
        e.stopPropagation();
        console.log('Click ME!')
    }
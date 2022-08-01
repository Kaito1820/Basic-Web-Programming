let btn = document.querySelector('.btn');

function viec1(){
    console.log('bủh bủh')
}
function viec2(){
    console.log('lmao lmao')
}

btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)

// btn.addEventListener('click', function(e){
//     console.log('Hello');
// });

setTimeout(function(){
    btn.removeEventListener('click', viec1)
}, 3000);
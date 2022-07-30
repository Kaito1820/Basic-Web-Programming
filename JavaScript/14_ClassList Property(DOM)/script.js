// la thuoc tinh cua element node, chi su dung dc khi da lay elemnt
// dung de quan ly class cua 1 element

// add : them class
// contains: kiem tra co class gi do trong element hay khong 
// remove: xoa class
// toggle: neu co class duoc goi toi -> thi xoa, neu khong co class duoc goi toi -> thi them vao
// replace('currClass', 'newClass')
let boxElement = document.querySelector('.box')

// console.log(boxElement.classList)
// console.log(boxElement.classList.length)
// console.log(boxElement.classList.value)

boxElement.classList.add('red', 'blue')
console.log(boxElement.classList.contains('red'))

// setTimeout(()=>{
//     boxElement.classList.remove('red')
// }, 3000); // dung ham nay de thay ro hon

setInterval(()=>{
    boxElement.classList.toggle('green')
},1000)


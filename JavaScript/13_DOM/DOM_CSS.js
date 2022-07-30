// DOM style

let boxElement = document.querySelector('.box')

// boxElement.style.width = '100px'
// boxElement.style.height = '200px'
// boxElement.style.backgroundColor = 'red' // trong css la background-color

Object.assign(boxElement.style, {
    width: '200px',
    height: '100px',
    backgroundColor : 'green'
}); // giong cai tren nhung gon hon

console.log(boxElement.style.backgroundColor)
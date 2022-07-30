let headingElement = document.querySelector('h1')

headingElement.title = 'addHeading' // them attribute title 'addHeading' cho tag h1

headingElement.className = 'addClassName' // them attribute class

headingElement.setAttribute('class', 'myClass') // them attribute class 'myClass'
headingElement.setAttribute('href', 'myLink') // them attribute href mac du khong phai the a

console.log(headingElement.getAttribute('class'))

let anchorElement = document.querySelector('a')

anchorElement.href = '###' // them href cho the a
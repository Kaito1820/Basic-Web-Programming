//Có 3 thành phần
/**
 * 1. Element(thẻ tag):
 * -> get Element thông qua: id, class, css selector, html collection
 * 2. Attribute (thuộc tính trong thẻ tag)
 * 3. Text
 */


// 1.

let headingNode = document.getElementById('heading');
// console.log(headingNode);

let headingNode2 = document.getElementsByClassName('heading2'); // -> tạo ra HTML Collection
// console.log(headingNode2)

let heading3 = document.getElementsByTagName('h1')
// console.log(heading3)

let css = document.querySelector('.box .headingS')
let css2 = document.querySelectorAll('.box .headingS')
let css3 = document.querySelector('.box .headingS:nth-child(2)')
// console.log(css)
// console.log(css2)
// console.log(css2[1])
// console.log(css3)
console.log(document.forms);
console.log(document.forms[1]);
console.log(document.forms['form-1']);
console.log(document.anchors) // chỉ trả về thẻ a có attribute name


function getLastElement(array){
    let temp = array.pop()
    array.push(temp)
    return temp
}
function getFirstElement(array){
    let temp = array.shift()
    array.unshift(temp)
    return temp
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);
var result1= getFirstElement(animals)
console.log(result); // Expected: "Elephant"
console.log(result1); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
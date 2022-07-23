/**
 * 1. to string
 * 2. .join()
 * 3. .pop(): xoa phan tu cuoi va tra ve phan tu do
 * 4. .push('element1', 'element2',...): them 1 hoac nhieu phan tu sau array va tra ve do dai moi cua array
 * 5. .shift(): xoa phan tu dau mang va tra ve phan tu do
 * 6. .unshift(): them 1 hoac nhieu phan tu truoc array va tra ve do dai moi cua array
 * 7. .splice(index, deleteCount): xoa 1 phan tu bat ki
 *    .splice(index, deleteCount, insertElement1,...): thuong dung voi cu phap .splice(index, 0, insertElement1,...) de chen vao vi tri bat ki
 * 8. a1.concat(a2): noi mang
 * 9. .slice(startNum, endNum): cut mang
 */

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]

console.log(languages.toString())
console.log(languages.join(' - '))
console.log(languages[2])
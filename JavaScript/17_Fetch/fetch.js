// 1. Front-end: Xây dựng giao diện người dùng
// 2. Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

// API -> Application programming interface
// Cổng giao tiếp giữa các phần mềm (tức là interface của phần mềm)

// Backend -> API (URL) -> Fetch -> JSON/XML -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML


// let postAPI = 'https://jsonplaceholder.typicode.com/todos/1'
let postAPI = 'https://jsonplaceholder.typicode.com/posts'
/*
fetch(postAPI)
    .then(function(response){
        return response.json(); // = JSON.parse: JSON -> javascript
    })
    .then(function(posts){
        console.log(posts);
    })
*/

fetch(postAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        let html = htmls.join('')
        document.getElementById('post-block').innerHTML = html;
    })
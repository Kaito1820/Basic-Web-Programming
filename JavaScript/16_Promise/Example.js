let users = [
    {
        id: 1,
        name: 'Khanh',
    },
    {
        id: 2,
        name: 'Kaito', 
    },
    {
        id: 3,
        name: 'Kuro',
    }
]
let comments = [
    {
        id: 1,
        user_id: 1,
        content: 'hello cac ban'
    },
    {
        id: 2,
        user_id: 2,
        content: 'hi ban'
    },
    {
        id: 3,
        user_id: 3,
        content: 'bruh'
    }
]

// 1. Lấy comments
// 2. Từ comments lấy ta các user_id,
// 3. Từ user_id lấy ra user tương ứng

// Fake API (Tức là đang viết 1 hàm giống có thao tác và thời gian chạy giống API)
// -> dùng setTimeout -> xử lí bất đồng bộ -> dùng Promise

// 1. Array
// 2. Function, callback
// 3. DOM
// 4. Promise
function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000);
    })
}

function getUsersByIds(userIDs){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIDs.includes(user.id);
        });

        setTimeout(function(){
            resolve(result);
        },1000);
    })
}
getComments()
    .then(function(comments){
        let userIDs = comments.map(function(comments){
            return comments.user_id;
        });

        return getUsersByIds(userIDs)
                .then(function(users){
                    return {
                        users: users,
                        comments: comments,
                    };
                })
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li> ${user.name}: ${comment.content} </li>`;
        });
        commentBlock.innerHTML = html;
    })
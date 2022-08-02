// synchronous: đồng bộ
// asynchronous: bất đồng bộ


// ***Các thao tác bất đồng bộ***
//setTimeout, setInterval
// fetch, XML HttpRequest
// file reading
// request animation frame

// Example about asynchronous
setTimeout(function(){
    console.log(1)
}, 0)

console.log(2)
//Note: Xét về tư duy sync thì 1 sẽ được xuất ra trước,
// chính xác thì đây là async vì 2 sẽ được xuất ra trước
// nhớ callback
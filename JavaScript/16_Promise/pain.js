// Callback hell: tức là những tác vụ callback lồng vào nhau 
// Pyramid of Doom
//-> học promise để giải quyết những vấn đề này

setTimeout(function(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
        setTimeout(function(){
            console.log(3);
            setTimeout(function(){
                console.log(4);
            },1000);
        },1000);
    },1000);
},1000);

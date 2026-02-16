//TODO: PROMISES 

const btn = document.querySelector("button")

function moveRight(dist,time,cb){
    setTimeout(function(){
        btn.style.transform = `translateX(${dist}px)`
    },`${time}`)
}
moveRight(100,2000)


// TODO Callback hell 
// often referred to as the "Pyramid of Doom," is a notorious issue in asynchronous JavaScript programming where multiple, nested callbacks make the code hard to read, maintain, and debug. It occurs when asynchronous operations—such as network requests, file reading, or database queries—depend on the results of previous ones, forcing them to be nested inside one another. 
// What is Callback Hell?
// Definition: The situation where excessive, deeply nested callback functions form a pyramid-like,, "Christmas tree" structure in your code.
// The Cause: JavaScript is single-threaded and uses callbacks to handle asynchronous tasks without blocking the main thread. When multiple tasks must run sequentially (e.g., login 
//  get user data 
//  get orders), this leads to nesting.

//getData(function(a){
//     getMoreData(a, function(b){
//         getEvenMoreData(b, function(c){
//             getFinalData(c, function(d){
//                 console.log(d);
//             });
//         });
//     });
// });
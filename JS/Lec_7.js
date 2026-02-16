// const btn = document.querySelector("button")

// function moveRight(dist,time,cb){
//     setTimeout(function(){
//         btn.style.transform = `translateX(${dist}px)`
//     },`${time}`)
// }
// moveRight(100,2000)


// TODO Callback hell - reason promises are important 
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

//TODO: PROMISES 

//promise is and object that represents failure or completion of a task
//promises has 3 stages - 
//1) pending
//2) fulfilled
//3) rejected

// function returnPaise(val){
//     setTimeout(() => {
//         return val
//     }, 3000);
//     //it retruns undefined
// }

// const rs = returnPaise(500)
// console.log(rs)

//Syntax - 
let prom = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const num = Math.random() * 5 + 1
        console.log(num)
        if (num < 3){
            resolve("no class tomorrow")
        }
        else{
            reject("class tomorrow")
        }
    },2000)
})

prom
.then((val) => console.log(val)) //if promoise fullfilled
.catch((err) => console.log(err)) // if promise rejected
console.log(prom)





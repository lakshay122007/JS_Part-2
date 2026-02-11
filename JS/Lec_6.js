//TODO: Asynchronus function, setTimeout(), setInterval() 

//1) setTimeout() - if we want to execute a particular function after some time - basically delay the execution\
//syntax - setTimeout(function(){},delay)

// console.log(23) 

// setTimeout(function(){
//     console.log("JSCWIC") 
// }, 3000)

// console.log(329)

// setTimeout(function(){
//     console.log("huhuhuh")    //TODO: js event loop 
//     console.log(889)
// }, 0)

// console.log(8)/
// console.log("lakshay")
// console.log("goyal")



console.log("A")

setTimeout(() => {
    console.log("B")

    setTimeout(() => {
        console.log("C")
    },0)
    console.log("D")
},0)
setTimeout(()=>{
    console.log("E")
},0)
console.log("F")


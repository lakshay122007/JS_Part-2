//TODO: Asynchronus function, setTimeout(), setInterval() 

//1) setTimeout() - if we want to execute a particular function after some time - basically delay the execution\
//syntax - setTimeout(function(){},delay)

console.log(23) //executes first

setTimeout(function(){
    console.log("JSCWIC") //executes at last after 2 seconds
}, 3000)

setTimeout(function(){
    console.log("huhuhuh") 
}, 6000)

console.log(8)//executes second
console.log("lakshay")
console.log("goyal")


//TODO: Asynchronus function, setTimeout(), setInterval() 

//1) setTimeout() - if we want to execute a particular function after some time - basically delay the execution\
//syntax - setTimeout(function(){},delay)

console.log(23) 

setTimeout(function(){
    console.log("JSCWIC") 
}, 3000)

console.log(329)

setTimeout(function(){
    console.log("huhuhuh")    //TODO: js event loop 
    console.log(889)
}, 0)

console.log(8)
console.log("lakshay")
console.log("goyal")



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


//setInterval() - repeats a particular function after a certain interval of time

let count = 0
const id = setInterval(()=>{
    console.log("HELLLO")
    count ++
    if (count == 5){
        clearInterval(id)
    }
},2000)

//console.log(id) - setintrval has its id, which it returns - 

// Timeout {
//   _idleTimeout: 2000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 11,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: 2000,
//   _destroyed: false,
//   Symbol(refed): true,
//   Symbol(kHasPrimitive): false,
//   Symbol(asyncId): 7,
//   Symbol(triggerId): 1,
//   Symbol(kAsyncContextFrame): undefined
// }

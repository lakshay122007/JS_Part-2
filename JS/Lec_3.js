//TODO: CallBack Function and Higher Order Function 

//TODO Callback Function --> a function we pass as an argument in Another Function 

// const names = ["a", "b", "c", "d"]

// for (let i of names) {
//     console.log(`Welcome, ${i}`)
// }


// const nums = [1,2,3,4]

// for (let num of nums) {
//     console.log(num*2)
// }



function add(a,b){
    console.log(a+b)
}

function subtract(a,b){
    console.log(a-b)
}

function multiply(a,b){
    console.log(a*b)
}

function operation(a,b,op) {  //higher order function
    op(a,b)  //callback function
}

operation(4,2,add)
operation(4,2,subtract)
operation(4,2,multiply)


//TODO: SCOPES 

//TODO: Types of Scopes --> 1) Function Scope  2) blocked Scope 

//describes how are variables defined such that they are accessible for operations or not
//if variable created inside function --> cannot be accessed outside, thus is called function scope.(var is func scope)
//if a variable with (let) is created withib a block of code, it cannot be accessed outside the block.(let/const is blocked scope)

var b = 10        //var is function scope
function print(){
    if(true){
        var a = 60
        // let c = 50 //"let" is blocked scope(cannot be accessed outside a code block)
        console.log(a) //prints 60
        // console.log(c) 
    }
    console.log(a) //prints 60
    // console.log(c) //throws error
}
console.log(b)
print()


// <----------------------------------------------------------------------------------->


function times(word,num2){
    console.log(`i want to print ${word} ${num2} times`)
    print1(word,num2)
}

function print1(word,num2){
    for (let i = 0; i < num2; i++){
        console.log(word)
    }
}
times("hello", 4)



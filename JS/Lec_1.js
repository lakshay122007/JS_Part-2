//Arrow function - Kind of Function expression

 //1. Normal way

function hello() {
    console.log(hello + "HUEHUE")
}

//2. Expression way
const hello1 = function() {
    console.log(hello + "HUEHUE")
}

//3. Arrow function
const hello2 = () => console.log(hello + "HUEHUE")

//in Arrow function- it doesn't have name.

// there is no function keyword, if one parameter Present.
// no need of brackets.
// If single line - we can skip curly({}) brackets.


//JSON PARSING OBJECT

//Fixed Format, Double Quotes Only.
let backend = `{
    "name" : "lakshay", 
    "age" : 123
}`

let data = JSON.parse(backend)
console.log(data)
console.log(data.name)
console.log(data.age)
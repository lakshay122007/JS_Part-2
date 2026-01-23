// //Arrow function - Kind of Function expression

//  //1. Normal way

// function hello() {
//     console.log(hello + "HUEHUE")
// }

// //2. Expression way
// const hello1 = function() {
//     console.log(hello + "HUEHUE")
// }

// //3. Arrow function
// const hello2 = () => console.log(hello + "HUEHUE")

// //in Arrow function- it doesn't have name.

// // there is no function keyword, if one parameter Present.
// // no need of brackets.
// // If single line - we can skip curly({}) brackets.


// //JSON PARSING OBJECT

// //Fixed Format, Double Quotes Only.
// let backend = `{
//     "name" : "lakshay", 
//     "age" : 123
// }`

// let data = JSON.parse(backend)
// console.log(data)
// console.log(data.name)
// console.log(data.age)




const programLangs = ["Javascript", "C++", "Python", ["Django", "AI/ML"], "Java", {responsiveness: "Media Query"}];


const newProgramLangs = [...programLangs];

newProgramLangs[4] = "NodeJS";
newProgramLangs[3][1] = "ReactJS";


console.log(programLangs);


// The JSON format is syntactically identical to the code for creating JavaScript objects.

// Because of this, a JavaScript program can easily convert JSON data into native JavaScript objects.

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()

// It is a common mistake to call a JSON object literal "a JSON object".

// JSON cannot be an object. JSON is a string format.

// The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.
//TODO: NPM, ES6 modules 
//NPM: Node package manager
//ES6 module
//note:- the problem was if we connect multiple script files, 
// then one value of a varibale can be used by anothe script file which raises an issue.
//  - it was called -
//TODO: Global Variable Pollution 
//thats why modueles were created

import {a,order} from "./Lec_10_1.js" //import from path - named export
import b from "./Lec_10_1.js" // - defualt export 
//can also write like this - import b { a, order } - the ones in bracket - named import
                                                // - the one outside - default export

console.log(a)
console.log(b)
console.log(order)

// var clc = require("cli-color");
// console.log(clc.red("Text in red"));


//types of export
//1) named - use direct name for import - using curly brackets - '{}' on name
//2) default

//npm : packages : 
//node: run js locally
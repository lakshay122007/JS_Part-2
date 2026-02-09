//TODO: JS Array methods - forEach(), map(), sort(), filter() 

//1) forEach() - a HOF, that takes callback function as paramater ,that helps to iterate on arrays.

// const nums = [9, 10, 78, 99, 200]

// nums.forEach(getnums)
// function getnums(ele){      //method 1
//     console.log(ele)
// }

// nums.forEach(function(ele){   //took a callback func as parameter
//     console.log(ele)           //method 2
// })


const num1 = [90, 9, 7, 9, 99, 20]
let sum1 = 0
num1.forEach(function(ele){
    sum1 += ele
})
console.log(sum1)

num1.forEach(function(ele, index){
    if(ele == 99){
        console.log(index)
    }
})


//2) array map()

const num2 = [45,4,65,23,7]
const res = num2.map(function(num, index){
    return num*2       //pushes the element in a whole new array
})
console.log(res)

const countries = ['The India', 'The USA', 'The UK', 'The Australia']

let res1 = countries.map(function(ele){
    return ele.replace('The ', '')
})
console.log(res1)
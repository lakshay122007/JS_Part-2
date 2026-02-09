//TODO: JS Array methods - forEach(), map(), sort(), filter() 

//1) forEach() - a HOF, that takes callback function as paramater ,that helps to iterate on arrays.

const nums = [9, 10, 78, 99, 200]

nums.forEach(getnums)
function getnums(ele){      //method 1
    console.log(ele)
}

nums.forEach(function(ele){   //took a callback func as parameter
    console.log(ele)           //method 2
})
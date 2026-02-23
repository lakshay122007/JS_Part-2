//TODO: APIs 

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://dummyjson.com/products/1
const api = "aaOoCHxkUbibcR5WFBRHaeU4vxz0q0PUL2npsSXN"

const url = `https://api.nasa.gov/planetary/apod?api_key=${api}`

//TODO: fetch returns the promise 

fetch(url)
.then((val) => val.json()) //this will return a promise
.then((data) => console.log(data)) //so this 'then' will again check the promise returned above then console the object.
.catch((err) => console.log(err)) //fetch will fail if wrong API is given







// //TODO: ASYNC AND AWAIT 

// console.log(1);

// async function check(){
//     // setTimeout(() =>{
//         const p1 = new Promise((resolve,reject) => {
//             resolve("huehuehue")
//         })
//         return p1
//     // },2000)
// }

// async function exec(){  
//     console.log("waiting.......")
//     const res = await check()
//     console.log(res)
//     console.log("done");
    
    
// // this async automatically returns a promise. SO whenever you make any function "async" it will return a promise.
// }
// exec() 

const api = "aaOoCHxkUbibcR5WFBRHaeU4vxz0q0PUL2npsSXN"
const url = `https://api.nasa.gov/planetary/apod?api_key=${api}&date=2024-01-25`

async function getnasa(){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data);
}
getnasa()
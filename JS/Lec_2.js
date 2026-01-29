let student = {
    name: "abc",
    class: 10,
    score: 70
}

for(let i of Object.values(student)){
    console.log(i)
}


let kuch = [
            {
            name: "abc",
            class: 10,
            score: 70
        },
        {
            name: "abc",
            class: 10,
            score: 70
        },
        {
            name: "abc",
            class: 10,
            score: 70
        }
]

// let a = [1, 2];
// let b = [3, 4];
// let combined = [...a, ...b];
// let [first, third] = combined;
// console.log(first, third);

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;

a[c] = 456;
console.log(a)

console.log(a[b]);
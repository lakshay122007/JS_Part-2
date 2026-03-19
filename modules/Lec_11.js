

const btn = document.getElementById("btn")

btn.addEventListener('click', function(){

    const p = document.createElement("p")
    p.innerText = "This is a paragraph"
    const div = document.querySelector("div")

    div.appendChild(p)

})

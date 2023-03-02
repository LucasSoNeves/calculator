const caixa = document.querySelector("#caixa")
const array = ["HTML", "CSS", "Javascript"]

array.map((element) => {
    let p = document.createElement("p")
    p.innerHTML = element
    caixa.appendChild(p)

    p.style.borderBottom = "1px dashed black"
})
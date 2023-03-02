const numberTecles =[...document.querySelectorAll(".num")]
const OperationTecles = [...document.querySelectorAll(".operation")]
const resultTecle = document.querySelector(".result")
const display = document.querySelector("#screen")
const startOff = document.getElementById("#k_off")
const clear = document.querySelector("#k_clear")
const equivalent = document.querySelector("#k_equivalent")


let signal = false
let decimal = false

numberTecles.forEach((el) => {
    el.addEventListener("click", (evt) => {
        signal = false
        if( evt.target.innerHTML == "," ) {
            if( !decimal ) {
                decimal = true
                if( display.innerHTML == "0" ) {
                    display.innerHTML = "0,"
                }
                else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if( display.innerHTML == "0" ) {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

OperationTecles.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if( !signal ) {
            signal = true
            if( display.innerHTML == "0" ) {
                display.innerHTML =""
            }
            if( evt.target.innerHTML == "x" ) {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML 
            }    
        }
    })
})

clear.addEventListener("click", (evt) => {
    signal = true
    decimal = false
    display.innerHTML = "0"
})

equivalent.addEventListener("click", (evt) => {
    signal = false
    decimal = false
    const result = eval(display.innerHTML)
    display.innerHTML = result
})
const numberTecles =[...document.querySelectorAll(".num")]
const OperationTecles = [...document.querySelectorAll(".operation")]
const resultTecle = document.querySelector(".result")
const display = document.querySelector("#screen")
const startOff = document.querySelector("#k_off")
const clear = document.querySelector("#k_clear")
const equivalent = document.querySelector("#k_equivalent")

const calculator = document.querySelector(".all")
const mostrar = document.querySelector("#mostrar")
const ocultar = document.querySelector("#ocultar")

const after = document.querySelector(".calc")



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

ocultar.addEventListener("click", () => {
    if( calculator.style.display = "block" ) {
        calculator.style.display ="none"
        after.style.height = "30px"
    }
})

mostrar.addEventListener("click", () => {
    if( calculator.style.display = "none" ) {
        calculator.style.display = "block"
        after.style.height = "600px"
    }
})

startOff.addEventListener("click", (evt) => {
   if( startOff.innerHTML == "OFF" ) {
    startOff.innerHTML = "ON"
   } else {
    startOff.innerHTML = "OFF"
   }
})
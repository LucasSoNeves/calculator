const p_array = document.querySelector('#array')
const btnReduzir = document.querySelector('#btnReduzir')
const resultado = document.querySelector('#resultado')
let cont = 0

const elements_array = [1, 2, 3, 4, 5]
let ant = []
let atu = []

p_array.innerHTML = "[" + elements_array + "]"

btnReduzir.addEventListener("click", (evt) => {
  resultado.innerHTML = elements_array.reduce((anterior, atual, PageTransitionEvent) => {
  ant.push(anterior)
  atu.push(atual)
  return atual + anterior
  })
  resultado.innerHTML+= "<br/> Valor anterior: " + ant + "<br/> Valor atual: " + atu
})
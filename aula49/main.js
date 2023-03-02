const p_array = document.querySelector('#array')
const btnPesquisar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')
let cont = 0

const elements_array = [11, 15, 16, 17, 14, 13, 1]
p_array.innerHTML = "[" + elements_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
  const ret = elements_array.some( (e, i) => {
    if ( e < 18 ) {
      resultado.innerHTML = "Os arrays não atendem a exigência."
    }
    return e >= 18
  })

  if ( ret ) {
    resultado.innerHTML = "Ao menos um array atende a exigência."
  }
}) 
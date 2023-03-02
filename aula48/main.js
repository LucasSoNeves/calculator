const p_array = document.querySelector('#array')
const btnPesquisar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elements_array = [21, 25, 21, 19, 18, 30]
p_array.innerHTML = "[" + elements_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
  const ret = elements_array.every( (e, i) => {
    if ( e < 18 ) {
      resultado.innerHTML = "Idade " + e + " encontrado na posição " + i
    }
    return e >= 18
  })

  if ( ret ) {
    resultado.innerHTML = "Todas as idades são maiores que 18."
  }
}) 
const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elements_array = [10, 5, 8, 2, 9, 15, 20]
p_array.innerHTML = "[" + elements_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado!"
  const ret = elements_array.find((e, i) => {
    if( e==txt_pesquisar.value ) {
        resultado.innerHTML = e + " encontrado " + " na posição " + i
        return e
    }
  })
})
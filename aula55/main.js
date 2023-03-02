const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("Curso", "Javascript")
mapa.set(10, "CFB")
mapa.set(1, 100)
mapa.set("Lenda", 100)

if ( mapa.has("Lenda") ) {
    caixa.innerHTML = "A chave existe na coleção."
} else {
    caixa.innerHTML = "A chave NÃO  existe na coleção."
}

caixa.innerHTML += `</br> O tamanho da coleção é: ${mapa.size}.`
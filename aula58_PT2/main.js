class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if ( ptipo == 1 ) {
            this.tipo = "Esportivo"
            this.velmax = 370
        } else if ( ptipo == 2 ) {
            this.tipo = "Utilitário"
            this.velmax = 220
        } else if ( ptipo == 3 ) {
            this.tipo = "Sedã"
            this.velmax = 260
        } else {
            this.tipo = "Militar"
            this.velmax = 120
        }
    }
    info() {
        console.log(`Categoria: ${this.tipo}`)
        console.log(`Modelo: ${this.nome}`)
        console.log(`Velocidade Máxima: ${this.velmax}`)
        console.log(`---------------------------`)
    }
}

let c1 = new Carro("Hennessey Venon F5", 1)
let c2 = new Carro("Volvo XC40", 2)
let c3 = new Carro("Audi A5", 3)
let c4 = new Carro("Guarani", 4)

c1.info()
c2.info()
c3.info()
c4.info()
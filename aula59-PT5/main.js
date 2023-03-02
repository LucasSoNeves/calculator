const Nave = function(energy) {
    this.energy = energy
    this.shootings = 100
}

const n1 = new Nave(100)
Nave.prototype.vidas = 3

console.log(Nave)
console.log(n1)
console.log(n1.vidas)
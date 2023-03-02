class Npc {
    static alert = false
    constructor(energy) {
        this.energy = energy
        this.alert = false
    }

    info = function() {
        console.log(`Energy: ${this.energy}`)
        console.log(`Alerta: ${(Npc.alert? "Yes":"No")}`)
        console.log("-----------------------")
    }
    static alertar = function() {
        Npc.alert = true
    }
}



const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()
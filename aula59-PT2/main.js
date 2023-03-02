const typeMilitary = document.querySelector("#f_typeMilitary")
const typeNormal = document.querySelector("#f_typeNormal")
const armor = document.querySelector("#f_armor")
const ammunition = document.querySelector("#f_ammunition")
const cars = document.querySelector(".cars")
const addCar = document.querySelector("#btn_addCarro")

const carName = document.querySelector("#f_name")
const carDoors = document.querySelector("#f_doors")

let a_cars = []

typeMilitary.addEventListener("click", (evt) => {
    armor.removeAttribute("disabled")
    ammunition.removeAttribute("disabled")
    carName.value = ''
    carDoors.value = 0
    armor.value = 0
    ammunition.value = 0
})

typeNormal.addEventListener("click", (evt) => {
    armor.value = 0
    ammunition.value = 0
    armor.setAttribute("disabled", "disabled")
    ammunition.setAttribute("disabled", "disable")
    
})

const carsManagerExhibition = () => {
    cars.innerHTML = ""
    a_cars.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML = `Name: ${c.name}<br/>`
        div.innerHTML += `Doors: ${c.doors}<br/>`
        div.innerHTML += `Armor: ${c.armor}<br/>`
        div.innerHTML += `Ammunition: ${c.ammunition}<br/>`
        div.innerHTML += `Color: ${c.color}`
        cars.appendChild(div)
    })
}

addCar.addEventListener("click", () => {
    if ( typeNormal.checked ) {
        const c = new Car(carName.value, carDoors.value)
        a_cars.push(c)
    } else {
        const c = new Military(carName.value, carDoors.value, armor.value, ammunition.value)
        a_cars.push(c)
    }
    carsManagerExhibition()
})

class Car { // father class
    constructor(name, doors) {
        this.name = name
        this.doors = doors
        this.connected = false
        this.speed = 0
        this.color = undefined
    }

    start = function() {
        this.connected = true
    }

    off = function() {
        this.connected = false
    }

    setColor = function(color) {
        this.color = color
    }
}

class Military extends Car { // son class
    constructor(name, doors, armor, ammunition) {
        super(name, doors)
        this.armor = armor
        this.ammunition = ammunition
        this.setColor("Greem")
    }

    shooting = function() {
        if( ammunition > 0 ) {
            this.ammunition --
        }
    }
}

class Sport extends Car {
    constructor(name, doors, places) {
        super(name, doors)
        this.places = places
    }
}

const car_1 = new Car("Normal", 4)
car_1.start()
car_1.setColor("Black")

car_2 = new Military("Fighter", 6, 100, 50)

car_3 = new Sport("Koenigsegg", 2)

console.log(`Name: ${car_1.name}`)
console.log(`Doors: ${car_1.doors}`)
console.log(`Connected: ${car_1.start?"Yes":"No"}`)
console.log(`Speed: ${car_1.speed}`)
console.log(`Color: ${car_1.color}`)
console.log("------------------------------")

console.log(`Name: ${car_2.name}`)
console.log(`Doors: ${car_2.doors}`)
console.log(`Connected: ${car_2.start?"Yes":"No"}`)
console.log(`Speed: ${car_2.speed}`)
console.log(`Armor: ${car_2.armor}`)
console.log(`Ammunition: ${car_2.ammunition}`)
console.log(`Color: ${car_2.color}`)
console.log("------------------------------")

console.log(`Name: ${car_3.name}`)
console.log(`Doors: ${car_3.doors}`)
console.log(`Connected: ${car_3.start?"Yes":"No"}`)
console.log(`Speed: ${car_3.speed}`)
console.log(`Color: ${car_3.color}`)
console.log("------------------------------")
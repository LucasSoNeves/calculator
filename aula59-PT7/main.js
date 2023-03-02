class StandardCar{
    constructor() {
        if( this.constructor === StandardCar ) {
            throw new TypeError("Not possible instance this class.")
        }
        if( this.start === undefined ) {
            throw new TypeError("Implement the method start is required")
        }
        if ( this.off === undefined ) {
            throw new TypeError("Implementation of the method off is required")
        }
        this.doors = 4
        this.wheels = 4
        this.connected = false
    }
}

class Car extends StandardCar{
    constructor(type, turboStage) {
        super()
        this.turbo = new Turbo(turboStage)
        if( type == 1 ) {
            this.maxSpeed = 120
            this.name = "SUV"
        } else if ( type == 2 ) {
            this.maxSpeed = 160
            this.name = "Sport"
        } else if ( type == 3 ) {
            this.maxSpeed = 200
            this.name = "Super Sport"
        }
        this.maxSpeed += this.turbo.power
    }
    info() {
        console.log(this.name)
        console.log(this.maxSpeed)
        console.log(this.turbo)
        console.log(this.doors)
        console.log(this.wheels)
        console.log(this.connected)
        console.log("---------------")
    }
    start(){
        this.start = true
    }
    off(){
        this.start = false
    }
}

class Turbo{
    constructor(stage) {
        if ( stage == 0 ) {
            this.power = 0
        } else if ( stage == 1 ) {
            this.power = 50
        } else if ( stage == 2 ) {
            this.power = 75
        } else if ( stage == 3 ) {
            this.power = 100
        }
    }
}

class SpecialCar extends Car{
    constructor(turboStage) {
        super(4, turboStage)
        this.infoType = 1
        this.maxSpeed = 300 + this.turbo.power
        this.name = "Hypercar"
    }
    info() {
        if( this.infoType = 1 ) {
            super.info()
        } else {

        console.log(`Nome: ${this.name}`)
        console.log(`Speed: ${this.maxSpeed}`)
        console.log(`Turbo: ${this.turbo.power}`)
        console.log("---------------")
        }
    }
}

const car_1 = new Car(1, 2)
const car_2 = new Car(3, 3)
const car_3 = new SpecialCar(3)

car_1.info()
car_2.info()
car_3.info()